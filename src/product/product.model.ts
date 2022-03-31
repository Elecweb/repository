class Product {
  private id: string;
  private imageSrc: string;
  private imageAlt: string;
  private price: number;
  private color: string;
  private name: string;

  constructor({
    id,
    imageSrc,
    imageAlt,
    price,
    color,
    name,
  }: {
    id: string;
    imageSrc: string;
    imageAlt: string;
    price: number;
    color: string;
    name: string;
  }) {
    this.id = id;
    this.imageSrc = imageSrc;
    this.imageAlt = imageAlt;
    this.price = price;
    this.color = color;
    this.name = name;
  }

  getId = () => {
    return this.id;
  };

  getImageSrc = () => {
    return this.imageSrc;
  };

  getImageAlt = () => {
    return this.imageAlt;
  };

  getPrice = () => {
    return this.price;
  };

  getColor = () => {
    return this.color;
  };

  getName = () => {
    return this.name;
  };
}

export default Product;
