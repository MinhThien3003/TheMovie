export interface Promotion {
    id: number;
    title: string;
    description: string;
    image: string;
  }
  
  export const promotions: Promotion[] = [
    {
      id: 1,
      title: "[Khuyến Mãi] Thành Viên 2024",
      description: "Voucher giảm 90K dành tặng các con báo!",
      image: "https://iguov8nhvyobj.vcdn.cloud/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/2/4/240x201_3_2.png",
    },
    {
      id: 2,
      title: "[SỰ KIỆN] Ngày Sinh Nhật",
      description: "Giá vé các phòng chiếu đặc biệt chỉ từ 150K!",
      image: "https://iguov8nhvyobj.vcdn.cloud/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/h/a/happy_day_oct_28_n_o_240x201.jpg",
    },
    {
      id: 3,
      title: "[Khuyến Mãi] Thứ Tư Vui Vẻ",
      description: "Rạp tiêu chuẩn chỉ với 55k thứ 4 mỗi tuần!",
      image: "https://iguov8nhvyobj.vcdn.cloud/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/t/4/t4vv_240x201.jpg",
    },
    {
        id: 4,
        title: "[SỰ KIỆN] Happy Birthday",
        description: "Tặng bắp nước cho thành viên của rạp",
        image: "https://iguov8nhvyobj.vcdn.cloud/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/b/i/birthday_popcorn_box_240x201.png",
      },
  ];
  