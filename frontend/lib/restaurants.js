import { useQuery } from "@apollo/react-hooks";

const QUERY = gql`
    {
        restaurants {
        id
        name
        description
        image {
            url
        }
        }
    }
    `;

export function getAllRestaurantIds() {
    const data = useQuery(QUERY)
    ids = data.restuarants.id
    return ids.map(id => {
        return {
            params: {
              id: id
            }
          }
    })
}

export function getRestuarantData(id) {
    const data = useQuery(QUERY)
    if(data.id == id)
        return data
  }