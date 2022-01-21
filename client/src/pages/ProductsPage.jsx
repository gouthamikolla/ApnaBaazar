import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'

import ProductList from '../components/ProductList'
import PageHero from '../components/PageHero'
import Filters from '../components/Filters'


const ProductsPage = () => {
  return (
    <main>
      <PageHero title="products"/>
        <Wrapper className='page'>
          <div className="section-center products">
            <Filters/>
              <div>
                <ProductList/>

              </div>
            

          </div>


        </Wrapper>
     
    </main>
  )
}

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`

export default ProductsPage