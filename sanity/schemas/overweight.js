export default {
  name: 'overweight',
  title: 'OverWeight',
  type: 'document',
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      }
    },
    {
      name: "ingredients",
      title: "Ingredient",
      type: "string",
    },
    {
      name: "calories",
      title: "Calories",
      type: "number",
    },
    {
      name: "categories",
      title: "Categories",
      type: "string",
    },
  ],

  
}
