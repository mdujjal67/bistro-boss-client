import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useCart = () => {
    // tan stack query
    const { data: cart = [] } = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
         const res = await axios.get('http://localhost:5000/carts')
            return res.data;
        }
    })

      return[cart]
};

export default useCart;