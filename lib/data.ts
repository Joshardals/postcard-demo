export interface Postcard {
  id: string;
  title: string;
  image_url: string;
  price: number;
  description?: string;
  created_at: string;
}

export const postcards: Postcard[] = [
  {
    id: "1",
    title: "Vintage Car Wash",
    image_url: "/postcards/postcard-1.jpg",
    price: 4.99,
    description: "Classic 1950s American car wash scene",
    created_at: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Nordic Street Scene",
    image_url: "/postcards/postcard-2.jpg",
    price: 4.99,
    description:
      "Vintage Scandinavian town with traditional costume and polar bear",
    created_at: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Merry Christmas Wishes",
    image_url: "/postcards/postcard-3.jpg",
    price: 4.99,
    description: "Vintage holiday greeting card with floral wreath design",
    created_at: new Date().toISOString(),
  },
];
