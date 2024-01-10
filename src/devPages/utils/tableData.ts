export default function getTableData() {
  return [...Array(100)].map((_, index) => {
    return {
      property1: `Property 1 row ${index + 1}`,
      property2: `Property 2 row ${index + 1}`,
    };
  });
}
