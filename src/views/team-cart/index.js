import { Grid, Card, Box, Paper, Stack, Typography } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { styled } from '@mui/material/styles';

const TeamCart = () => {
    const shop = {
        name: 'Cơm Gà Nam Chợ Mới - Hoàng Diệu',
        imageUrl: 'https://images.foody.vn/res/g28/277130/prof/s640x400/foody-upload-api-foody-mobile-5-201006112619.jpg',
        address: '589 Hoàng Diệu, P. Hòa Thuận Đông, Quận Hải Châu, Đà Nẵng',
        sections: [
            {
                name: 'Món Đang Giảm',
                items: [
                    {
                        name: 'Combo: Cơm ba chỉ giòn da ĐB + 1 Coca-Cola',
                        description:
                            'Giảm 25K khi đặt combo có 01 Coca-Cola. Số lượng ưu đãi có hạn. Áp dụng từ 08/07-21/07/2022 và 03/08-10/08/2022',
                        price: 40000,
                        imageUrl:
                            'https://images.foody.vn/res/g28/277130/s120x120/9868de07-8207-4495-9dc0-509e96a1-78f68b01-220629145054.jpeg',
                        isAvailable: true
                    },
                    {
                        name: 'Combo: Cơm gà chiên mắm ĐB + 1 Coca-Cola',
                        description:
                            'Giảm 25K khi đặt combo có 01 Coca-Cola. Số lượng ưu đãi có hạn. Áp dụng từ 08/07-21/07/2022 và 03/08-10/08/2022',
                        price: 40000,
                        imageUrl:
                            'https://images.foody.vn/res/g28/277130/s120x120/9868de07-8207-4495-9dc0-509e96a1-78f68b01-220629145054.jpeg',
                        isAvailable: true
                    },
                    {
                        name: '1 Coca-Cola Chai',
                        description:
                            'Đặt thêm 01 Coca-Cola cùng món ăn tùy thích để tận hưởng ưu đãi 25K. Số lượng ưu đãi có hạn. Áp dụng từ 08/07-21/07/2022 và 03/08-10/08/2022',
                        price: 13500,
                        imageUrl:
                            'https://images.foody.vn/res/g28/277130/s120x120/2e2975b4-c116-414b-867a-8eb8e347-24746dc1-220629145027.jpeg',
                        isAvailable: true
                    },
                    {
                        name: 'Combo: 2 Cơm ba chỉ giòn da ĐB + 2 Coca-Cola',
                        description:
                            'Giảm 40K khi đặt combo có 02 Coca-Cola. Số lượng ưu đãi có hạn. Áp dụng từ 08/07-21/07/2022 và 03/08-10/08/2022',
                        price: 80000,
                        imageUrl:
                            'https://images.foody.vn/res/g28/277130/s120x120/0b50c4df-eede-4236-a4e1-8ebc373a-f0cc96dd-220629145218.jpeg',
                        isAvailable: true
                    },
                    {
                        name: 'Combo: 2 Cơm gà chiên mắm ĐB + 2 Coca-Cola',
                        description:
                            'Giảm 40K khi đặt combo có 02 Coca-Cola. Số lượng ưu đãi có hạn. Áp dụng từ 08/07-21/07/2022 và 03/08-10/08/2022',
                        price: 80000,
                        imageUrl:
                            'https://images.foody.vn/res/g28/277130/s120x120/0b50c4df-eede-4236-a4e1-8ebc373a-f0cc96dd-220629145218.jpeg',
                        isAvailable: true
                    },
                    {
                        name: '2 Coca-Cola Chai',
                        description:
                            'Đặt thêm 02 Coca-Cola cùng món ăn tùy thích để tận hưởng ưu đãi 40K. Số lượng ưu đãi có hạn. Áp dụng từ 08/07-21/07/2022 và 03/08-10/08/2022',
                        price: 27000,
                        imageUrl:
                            'https://images.foody.vn/res/g28/277130/s120x120/2e2975b4-c116-414b-867a-8eb8e347-24746dc1-220629145027.jpeg',
                        isAvailable: true
                    }
                ]
            },
            {
                name: 'DEAL SẢNG KHOÁI - GIẢM 25K',
                items: [
                    {
                        name: 'Combo: Cơm ba chỉ giòn da ĐB + 1 Coca-Cola',
                        description:
                            'Giảm 25K khi đặt combo có 01 Coca-Cola. Số lượng ưu đãi có hạn. Áp dụng từ 08/07-21/07/2022 và 03/08-10/08/2022',
                        price: 40000,
                        imageUrl:
                            'https://images.foody.vn/res/g28/277130/s120x120/9868de07-8207-4495-9dc0-509e96a1-78f68b01-220629145054.jpeg',
                        isAvailable: true
                    },
                    {
                        name: 'Combo: Cơm gà chiên mắm ĐB + 1 Coca-Cola',
                        description:
                            'Giảm 25K khi đặt combo có 01 Coca-Cola. Số lượng ưu đãi có hạn. Áp dụng từ 08/07-21/07/2022 và 03/08-10/08/2022',
                        price: 40000,
                        imageUrl:
                            'https://images.foody.vn/res/g28/277130/s120x120/9868de07-8207-4495-9dc0-509e96a1-78f68b01-220629145054.jpeg',
                        isAvailable: true
                    },
                    {
                        name: '1 Coca-Cola Chai',
                        description:
                            'Đặt thêm 01 Coca-Cola cùng món ăn tùy thích để tận hưởng ưu đãi 25K. Số lượng ưu đãi có hạn. Áp dụng từ 08/07-21/07/2022 và 03/08-10/08/2022',
                        price: 13500,
                        imageUrl:
                            'https://images.foody.vn/res/g28/277130/s120x120/2e2975b4-c116-414b-867a-8eb8e347-24746dc1-220629145027.jpeg',
                        isAvailable: true
                    },
                    {
                        name: 'Coca-Cola chỉ 1Đ',
                        description:
                            'Săn ngay Coca-Cola chỉ 1Đ. Số lượng mỗi ngày có hạn. Đặt thêm món để tận hưởng ưu đãi 25K & 40K cực đã. Áp dụng từ 08/07-21/07/2022 và 03/08-10/08/2022',
                        price: 15000,
                        imageUrl:
                            'https://images.foody.vn/res/g28/277130/s120x120/2e2975b4-c116-414b-867a-8eb8e347-24746dc1-220629145027.jpeg',
                        isAvailable: false
                    }
                ]
            },
            {
                name: 'DEAL HỨNG KHỞI - GIẢM 40K',
                items: [
                    {
                        name: 'Combo: 2 Cơm ba chỉ giòn da ĐB + 2 Coca-Cola',
                        description:
                            'Giảm 40K khi đặt combo có 02 Coca-Cola. Số lượng ưu đãi có hạn. Áp dụng từ 08/07-21/07/2022 và 03/08-10/08/2022',
                        price: 80000,
                        imageUrl:
                            'https://images.foody.vn/res/g28/277130/s120x120/0b50c4df-eede-4236-a4e1-8ebc373a-f0cc96dd-220629145218.jpeg',
                        isAvailable: true
                    },
                    {
                        name: 'Combo: 2 Cơm gà chiên mắm ĐB + 2 Coca-Cola',
                        description:
                            'Giảm 40K khi đặt combo có 02 Coca-Cola. Số lượng ưu đãi có hạn. Áp dụng từ 08/07-21/07/2022 và 03/08-10/08/2022',
                        price: 80000,
                        imageUrl:
                            'https://images.foody.vn/res/g28/277130/s120x120/0b50c4df-eede-4236-a4e1-8ebc373a-f0cc96dd-220629145218.jpeg',
                        isAvailable: true
                    },
                    {
                        name: '2 Coca-Cola Chai',
                        description:
                            'Đặt thêm 02 Coca-Cola cùng món ăn tùy thích để tận hưởng ưu đãi 40K. Số lượng ưu đãi có hạn. Áp dụng từ 08/07-21/07/2022 và 03/08-10/08/2022',
                        price: 27000,
                        imageUrl:
                            'https://images.foody.vn/res/g28/277130/s120x120/2e2975b4-c116-414b-867a-8eb8e347-24746dc1-220629145027.jpeg',
                        isAvailable: true
                    }
                ]
            },
            {
                name: 'Cơm (Bắt đầu bán 10h)',
                items: [
                    {
                        name: 'Cơm gà xé',
                        price: 27000,
                        imageUrl: 'https://images.foody.vn/res/g28/277130/s120x120/cfbc7b9a-0958-4ade-9d04-d36fb081f45e.jpg',
                        isAvailable: true
                    },
                    {
                        name: 'Cơm ba chỉ giòn da',
                        price: 30000,
                        imageUrl: 'https://images.foody.vn/res/g28/277130/s120x120/6e61e10b-1071-4dab-bc61-397dbe663887.jpg',
                        isAvailable: true
                    },
                    {
                        name: 'Cơm thịt xíu',
                        price: 25000,
                        imageUrl: 'https://images.foody.vn/res/g28/277130/s120x120/2660446e-c65e-4f52-a976-197abc00fa86.jpg',
                        isAvailable: true
                    },
                    {
                        name: 'Cơm gà xối mỡ',
                        price: 27000,
                        imageUrl:
                            'https://images.foody.vn/res/g28/277130/s120x120/4476c627-2d7d-45fb-be2f-a94b2ee0-538dd1e0-201216184616.jpeg',
                        isAvailable: true
                    },
                    {
                        name: 'Cơm thêm',
                        price: 5000,
                        imageUrl: 'https://images.foody.vn/res/g28/277130/s120x120/184c7e43-4df6-4a9c-afbd-aae53f7b5a99.jpg',
                        isAvailable: true
                    },
                    {
                        name: 'Cơm dương châu',
                        price: 25000,
                        imageUrl: 'https://images.foody.vn/res/g28/277130/s120x120/e92c4637-0b79-43e6-802e-ef12bfa4db21.jpg',
                        isAvailable: true
                    },
                    {
                        name: 'Cơm bò xào',
                        price: 30000,
                        imageUrl: 'https://images.foody.vn/res/g28/277130/s120x120/f0f6f704-90ab-417a-b76d-9a40a15ef51c.jpg',
                        isAvailable: true
                    },
                    {
                        name: 'Cơm gà chiên mắm',
                        price: 30000,
                        imageUrl: 'https://images.foody.vn/res/g28/277130/s120x120/fbd8679b-ef95-409b-8e66-2360152b3cc0.jpg',
                        isAvailable: true
                    },
                    {
                        name: 'Cơm gà quay',
                        price: 50000,
                        imageUrl: 'https://images.foody.vn/res/g28/277130/s120x120/56257b97-d8e2-4fd5-bb92-4ce60e6ee50c.jpg',
                        isAvailable: true
                    },
                    {
                        name: 'Cơm sườn nướng',
                        price: 27000,
                        imageUrl:
                            'https://images.foody.vn/res/g28/277130/s120x120/a417c672-5c74-4cf4-9ffd-4867e980-b8b7ee91-210304131548.jpeg',
                        isAvailable: true
                    },
                    {
                        name: 'Cơm Hải Sản',
                        price: 30000,
                        imageUrl: 'https://images.foody.vn/res/g28/277130/s120x120/a65fa0ce-1a29-4fa7-812d-35be0afeba97.jpg',
                        isAvailable: true
                    }
                ]
            },
            {
                name: 'Nước uống',
                items: [
                    {
                        name: 'Nước Mía',
                        price: 7000,
                        imageUrl: 'https://images.foody.vn/res/g28/277130/s120x120/72714e43-974c-4b98-875b-6f26f85b2373.jpg',
                        isAvailable: false
                    },
                    {
                        name: 'Coca Cola',
                        price: 15000,
                        imageUrl:
                            'https://images.foody.vn/res/g28/277130/s120x120/01010257-be31-40b7-8ef2-7fd9e617-aa8a01af-220516165049.jpeg',
                        isAvailable: true
                    },
                    {
                        name: 'Sprite',
                        price: 12000,
                        imageUrl: 'https://images.foody.vn/res/g28/277130/s120x120/ff1cc9a0-251e-499d-8d9d-48b567802be4.jpg',
                        isAvailable: true
                    },
                    {
                        name: 'Nước Suối',
                        price: 7000,
                        imageUrl: 'https://images.foody.vn/res/g28/277130/s120x120/27b1b13e-369e-4d92-9b72-3b3e6675c891.jpg',
                        isAvailable: true
                    },
                    {
                        name: 'Aquarius',
                        price: 12000,
                        imageUrl: 'https://images.foody.vn/res/g28/277130/s120x120/48cc1a1f-958c-4c8d-9d56-06be330daca7.jpg',
                        isAvailable: true
                    },
                    {
                        name: 'Trà Ô Long ',
                        price: 12000,
                        imageUrl:
                            'https://images.foody.vn/res/g28/277130/s120x120/1076f118-d307-4ed0-bfa6-bc1b9f54-c577be3c-220713191841.jpeg',
                        isAvailable: true
                    },
                    {
                        name: 'Stin Vàng',
                        price: 15000,
                        imageUrl:
                            'https://images.foody.vn/res/g28/277130/s120x120/7028ed5e-8c5c-4e2f-b732-87b78a2b-da6bb23f-220713191719.jpeg',
                        isAvailable: true
                    },
                    {
                        name: 'Pepsi',
                        price: 12000,
                        imageUrl:
                            'https://images.foody.vn/res/g28/277130/s120x120/872cdc6f-dddd-4e27-a29b-bcb3eea9-a0a1b6c0-220713192035.jpeg',
                        isAvailable: true
                    },
                    {
                        name: 'Mỉida Việt Quất',
                        price: 12000,
                        imageUrl:
                            'https://images.foody.vn/res/g28/277130/s120x120/6c5c1716-fe9b-4489-a8b4-a91e04d1-b830c4d0-220713192151.jpeg',
                        isAvailable: true
                    },
                    {
                        name: 'Stin Đỏ',
                        price: 15000,
                        imageUrl:
                            'https://images.foody.vn/res/g28/277130/s120x120/09c7f71e-0326-4e4d-952d-7fd5591e-26654dd0-220713191800.jpeg',
                        isAvailable: true
                    },
                    {
                        name: '7 Up',
                        price: 12000,
                        imageUrl:
                            'https://images.foody.vn/res/g28/277130/s120x120/3c739adf-25f4-4f8e-b87d-7011f054-a7ae0e78-220713191913.jpeg',
                        isAvailable: true
                    }
                ]
            },
            {
                name: 'Mỳ Miến',
                items: [
                    {
                        name: 'Mỳ Xíu',
                        price: 25000,
                        imageUrl: 'https://images.foody.vn/res/g28/277130/s120x120/bca6b1dc-ca65-4543-85d6-f4f231310dc2.jpg',
                        isAvailable: true
                    },
                    {
                        name: 'Mỳ Xào Mềm Hải Sản',
                        price: 30000,
                        imageUrl: 'https://images.foody.vn/res/g28/277130/s120x120/505e0451-136a-44ec-8679-ebf5dfcadda6.jpg',
                        isAvailable: true
                    },
                    {
                        name: 'Mỳ Xào Mềm Bò',
                        price: 30000,
                        imageUrl: 'https://images.foody.vn/res/g28/277130/s120x120/81b52285-c763-4222-adef-6f75e3c54076.jpg',
                        isAvailable: true
                    },
                    {
                        name: 'My  Xào Giòn Bò',
                        price: 30000,
                        imageUrl: 'https://images.foody.vn/res/g28/277130/s120x120/b0f11dd3-82d8-43a0-bba9-c6d784db4686.jpg',
                        isAvailable: true
                    },
                    {
                        name: 'Mỳ xào Giòn Hải Sản',
                        price: 30000,
                        imageUrl: 'https://images.foody.vn/res/g28/277130/s120x120/c188de9e-fd29-488b-957b-6f5f721bf8ec.jpg',
                        isAvailable: true
                    }
                ]
            },
            {
                name: 'Combo cơm + nước mía',
                items: [
                    {
                        name: 'Combo cơm ba chỉ giòn da + cơm gà xé',
                        price: 57000,
                        imageUrl:
                            'https://images.foody.vn/res/g28/277130/s120x120/ce146915-e6ff-42bb-bf36-be8da175-5daf5505-200917191605.jpeg',
                        isAvailable: true
                    },
                    {
                        name: 'Combo 2 cơm gà xối mỡ + 2 coca + 1 cơm thêm',
                        price: 83000,
                        imageUrl:
                            'https://images.foody.vn/res/g28/277130/s120x120/bee4c50e-11e6-4529-9889-1661f1ba-06e8c005-201023110936.jpeg',
                        isAvailable: true
                    }
                ]
            },
            {
                name: 'Combo cơm + coca',
                items: [
                    {
                        name: 'Cơm gà xối mỡ + 1 chai coca',
                        price: 39000,
                        imageUrl:
                            'https://images.foody.vn/res/g28/277130/s120x120/e0a83968-21c8-4d06-84ed-b5ab013a-5150192c-201217110508.jpeg',
                        isAvailable: true
                    },
                    {
                        name: 'Cơm gà xé + Coca',
                        description: '1 cơm gà xé + 1 chai coca',
                        price: 39000,
                        imageUrl:
                            'https://images.foody.vn/res/g28/277130/s120x120/e465cab1-c609-466d-96e8-b6fe1029-e80a7d6f-201116160934.jpeg',
                        isAvailable: true
                    },
                    {
                        name: 'Cơm ba chỉ + coca',
                        description: '1 cơm ba chỉ giòn da + 1 chai coca',
                        price: 42000,
                        imageUrl:
                            'https://images.foody.vn/res/g28/277130/s120x120/20cc4514-8ef6-4f33-a6fd-e9663b48-45ad9934-201117100332.jpeg',
                        isAvailable: true
                    },
                    {
                        name: 'Cơm thịt xíu + coca',
                        description: '1 cơm thịt xius + 1 chai coca',
                        price: 37000,
                        imageUrl:
                            'https://images.foody.vn/res/g28/277130/s120x120/4ec023ff-c3ab-49b1-b1ea-ba3dbe83-f15c3126-201117100610.jpeg',
                        isAvailable: true
                    },
                    {
                        name: 'Cơm chiên dương châu + coca',
                        description: '1 cơm chiên dương châu + 1 chai coca',
                        price: 37000,
                        imageUrl:
                            'https://images.foody.vn/res/g28/277130/s120x120/4adf0292-9c8e-4fe4-baa2-34892063-9cd387b5-201117101648.jpeg',
                        isAvailable: true
                    },
                    {
                        name: 'Cơm Gà Xé + Sprite',
                        price: 37000,
                        imageUrl:
                            'https://images.foody.vn/res/g28/277130/s120x120/1eedf7f0-9c5a-4f06-bd64-a93e1a41-bb84b8f2-210531154147.jpeg',
                        isAvailable: true
                    },
                    {
                        name: 'Cơm sườn nướng + 1 coca',
                        price: 39000,
                        imageUrl:
                            'https://images.foody.vn/res/g28/277130/s120x120/41f3b837-358d-4314-863b-e8f88b51-c9b3350b-210304131800.jpeg',
                        isAvailable: true
                    }
                ]
            }
        ]
    };

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary
    }));

    return (
        <Grid container spacing={2}>
            <Grid item>
                <MainCard title="ddfd">
                    <Typography variant="body2">
                        Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna
                        alissa. Ut enif ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal.
                        Duos aube grue dolor in reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean
                        cuspidate non president, sunk in culpa qui officiate descent molls anim id est labours.
                    </Typography>
                </MainCard>
            </Grid>
            <Grid item xs={8} container spacing={2}>
                {shop.sections.map((section, i) => (
                    <Grid key={i} item xs={12}>
                        <Item>
                            <Typography variant="subtitle1" component="div">
                                {section.name}
                            </Typography>
                        </Item>
                    </Grid>
                ))}
            </Grid>
            <Grid item xs={4}>
                Bill Here
            </Grid>
        </Grid>
    );
};

export default TeamCart;
