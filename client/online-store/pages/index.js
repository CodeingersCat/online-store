import {  Grid, Box } from '@chakra-ui/layout'
import { Heading } from '@chakra-ui/react'
import Card from '../components/Card'
import Link from 'next/link'
import { getAllProds } from '../helpers/Product'

export default function Home(props) {
  return (
    <Box w={"100%"}>
      <Heading mb="8vh">
        <span style={{borderBottom:"4px solid teal"}}>Latest Products</span>
      </Heading>

      <Grid templateColumns={["repeat(1, 1fr)","repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)","repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)"]} gap={20}>
        {props.prods.map(product => (
          <Link href={"/product/"+product._id} key={product.id}>
            <a><Card product={product}/></a>
          </Link>
        ))}
      </Grid>
    </Box>
  )
}

export const getStaticProps = async(context) => {
  const prods = await getAllProds()
  return({
    props: { prods }
  })
}


