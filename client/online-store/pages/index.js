import { Flex, Grid, Spacer } from '@chakra-ui/layout'
import { Box, Heading, Button, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card'
import styles from '../styles/Home.module.css'
import { products } from '../data/products'

export default function Home() {
  return (
    <div>
      <Heading mb="5vh">
        <span style={{borderBottom:"4px solid teal"}}>Latest Products</span>
      </Heading>

      <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={20}>
        {products.map(product => (
          <Card product={product} key={product._id}/>
        ))}
      </Grid>
    </div>
  )
}
