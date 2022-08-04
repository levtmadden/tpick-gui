import {
    Grid,
    Box,
    Stack,
    Typography,
    Button,
    IconButton,
    Divider,
    Accordion as MuiAccordion,
    AccordionSummary as MuiAccordionSummary,
    AccordionDetails as MuiAccordionDetails,
    TextField
} from '@mui/material';
import AddIcon from '@mui/icons-material/AddBox';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import { useParams } from 'react-router';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as mainService from 'services/main.service';
import { sum, toLocalePrice } from 'utils/pricing-tool';
import { groupBy } from 'utils/commom';

const Wrapper = ({ children, ...rest }) => (
    <Grid {...rest}>
        <Box sx={{ padding: 1, bgcolor: '#ffffff', borderRadius: 1 }}>{children}</Box>
    </Grid>
);

const Accordion = styled((props) => <MuiAccordion disableGutters elevation={0} square {...props} />)(() => ({
    '&:not(:last-child)': {
        borderBottom: 0
    },
    '&:before': {
        display: 'none'
    },
    borderRadius: 0
}));

const AccordionSummary = styled((props) => <MuiAccordionSummary {...props} />)(() => ({
    backgroundColor: 'transparent',
    border: '1px solid gainsboro',
    borderRadius: 0
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
    padding: 0,
    borderRadius: 0
}));

const TeamCart = () => {
    const { orderId } = useParams();
    const user = useSelector((x) => x.auth?.user);
    const [order, setOrder] = useState({ subOrders: [] });
    const [mySubOrder, setMySubOrder] = useState({ owner: null, items: [], using: false, confirmed: false });

    const isHost = () => user.id === order.host?.id;
    const groupItems = order?.subOrders
        .flatMap((subOrder) => subOrder.items)
        .reduce((acc, item) => {
            const itemName = item.name;
            if (acc[itemName]) {
                acc[itemName].quantity += item.quantity;
            } else {
                acc[itemName] = {
                    name: itemName,
                    price: item.price,
                    quantity: item.quantity
                };
            }
            return acc;
        }, {});

    console.log('🚀 ~ file: index.js ~ line 76 ~ TeamCart ~ groupItems', groupItems);

    const fetchOrderDetails = useCallback(async () => {
        const order = await mainService.getOrderDetails(orderId);
        setOrder(order);

        const myConfirmedSubOrder = order?.subOrders?.find((x) => x.owner?.id === user?.id);
        if (myConfirmedSubOrder && !mySubOrder.using) {
            setMySubOrder({
                ...myConfirmedSubOrder,
                confirmed: true
            });
        }
    }, [mySubOrder.using, orderId, user?.id]);

    const handleConfirmOrder = useCallback(async () => {
        await mainService.confirmOrder(order.id);
    }, [order.id]);

    useEffect(() => {
        if (!user) return;

        setMySubOrder({ ...mySubOrder, owner: user });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    useEffect(() => {
        fetchOrderDetails();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (order.isConfirm) return () => {};

        const interval = setInterval(fetchOrderDetails, 10000);

        return () => {
            clearInterval(interval);
        };
    }, [fetchOrderDetails, order.isConfirm]);

    if (!user) return null;

    return (
        <Grid container spacing={2}>
            <Wrapper item lg={6}>
                <Stack>
                    <Box bgcolor="#f7f7f7" my={0.5}>
                        <Box bgcolor="gainsboro" py={1.5}>
                            <Typography variant="h5" textAlign="center">
                                Chi tiết theo người
                            </Typography>
                        </Box>
                        {order.subOrders?.map((subOrder) => (
                            <Accordion key={subOrder.owner}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Box display="flex" alignItems="center">
                                        <Typography variant="h5">{subOrder.owner.name}</Typography>
                                        <Typography variant="subtitle1" ml={0.5} color="primary">
                                            {`${sum(subOrder.items, (x) => x.quantity)} phần - ${toLocalePrice(
                                                sum(subOrder.items, (x) => x.quantity * x.price)
                                            )}`}
                                        </Typography>
                                    </Box>
                                </AccordionSummary>
                                <AccordionDetails sx={{ border: '1px solid gainsboro', borderTop: 'none' }}>
                                    {subOrder.items?.map((item) => (
                                        <Box key={item.name} display="flex" alignItems="center" justifyContent="space-between" p={1}>
                                            <Typography variant="body1" fontSize={15} component="div">
                                                {item.quantity} x {item.name}
                                            </Typography>
                                            <Typography variant="body1" fontSize={15} component="div">
                                                {toLocalePrice(item.quantity * item.price)}
                                            </Typography>
                                        </Box>
                                    ))}
                                    <Divider />
                                    <Divider />
                                    {!!subOrder?.note && (
                                        <Box display="flex" alignItems="center" justifyContent="space-between" p={1} color="red">
                                            <Typography variant="body1" fontSize={15} component="div">
                                                Note
                                            </Typography>
                                            <Typography variant="body1" fontSize={15} component="div">
                                                {subOrder?.note}
                                            </Typography>
                                        </Box>
                                    )}
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Box>

                    <Box bgcolor="#f7f7f7" borderRadius={0} my={0.5}>
                        <Box bgcolor="gainsboro" py={1.5}>
                            <Typography variant="h5" textAlign="center">
                                Sao kê
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="space-between" p={1}>
                            <Typography variant="body1" fontSize={15} component="div">
                                Giảm giá
                            </Typography>
                            <Typography variant="body1" fontSize={15} component="div">
                                0
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="space-between" p={1}>
                            <Typography variant="body1" fontSize={15} component="div">
                                Ship
                            </Typography>
                            <Typography variant="body1" fontSize={15} component="div">
                                0
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="space-between" p={1}>
                            <Typography variant="h6" fontSize={15} component="div">
                                Tổng
                            </Typography>
                            <Typography variant="h6" fontSize={15} component="div">
                                {toLocalePrice(
                                    sum(order.subOrders, (subOrder) => sum(subOrder.items, (item) => item.price * item.quantity))
                                )}
                            </Typography>
                        </Box>
                        {isHost() && (
                            <Button fullWidth variant="contained" color="info" onClick={handleConfirmOrder}>
                                Hehe
                            </Button>
                        )}
                    </Box>
                </Stack>
            </Wrapper>
            <Wrapper item lg={6}>
                <Stack>
                    <Box bgcolor="#f7f7f7" my={0.5}>
                        <Box bgcolor="gainsboro" py={1.5}>
                            <Typography variant="h5" textAlign="center">
                                Chi tiết theo phần
                            </Typography>
                        </Box>
                        {Object.values(groupItems)?.map((groupItem) => (
                            <Accordion key={groupItem.name}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Box display="flex" alignItems="center">
                                        <Typography variant="subtitle1" ml={0.5} color="primary">
                                            {`${groupItem.quantity} x ${groupItem.name} - ${toLocalePrice(
                                                groupItem.price * groupItem.quantity
                                            )}`}
                                        </Typography>
                                    </Box>
                                </AccordionSummary>
                                {/* <AccordionDetails sx={{ border: '1px solid gainsboro', borderTop: 'none' }}>
                                    {groupItem.items?.map((item) => (
                                        <Box key={item.name} display="flex" alignItems="center" justifyContent="space-between" p={1}>
                                            <Typography variant="body1" fontSize={15} component="div">
                                                {item.quantity} x {item.name}
                                            </Typography>
                                            <Typography variant="body1" fontSize={15} component="div">
                                                {toLocalePrice(item.quantity * item.price)}
                                            </Typography>
                                        </Box>
                                    ))}
                                    <Divider />
                                    <Divider />
                                    {!!groupItem?.note && (
                                        <Box display="flex" alignItems="center" justifyContent="space-between" p={1} color="red">
                                            <Typography variant="body1" fontSize={15} component="div">
                                                Note
                                            </Typography>
                                            <Typography variant="body1" fontSize={15} component="div">
                                                {groupItem?.note}
                                            </Typography>
                                        </Box>
                                    )}
                                </AccordionDetails> */}
                            </Accordion>
                        ))}
                    </Box>

                    <Box bgcolor="#f7f7f7" borderRadius={0} my={0.5}>
                        <Box bgcolor="gainsboro" py={1.5}>
                            <Typography variant="h5" textAlign="center">
                                Sao kê
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="space-between" p={1}>
                            <Typography variant="body1" fontSize={15} component="div">
                                Giảm giá
                            </Typography>
                            <Typography variant="body1" fontSize={15} component="div">
                                0
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="space-between" p={1}>
                            <Typography variant="body1" fontSize={15} component="div">
                                Ship
                            </Typography>
                            <Typography variant="body1" fontSize={15} component="div">
                                0
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="space-between" p={1}>
                            <Typography variant="h6" fontSize={15} component="div">
                                Tổng
                            </Typography>
                            <Typography variant="h6" fontSize={15} component="div">
                                {toLocalePrice(
                                    sum(order.subOrders, (subOrder) => sum(subOrder.items, (item) => item.price * item.quantity))
                                )}
                            </Typography>
                        </Box>
                        {isHost() && (
                            <Button fullWidth variant="contained" color="info" onClick={handleConfirmOrder}>
                                Hehe
                            </Button>
                        )}
                    </Box>
                </Stack>
            </Wrapper>
        </Grid>
    );
};

export default TeamCart;
