import React, { FC, useState } from 'react'
import AddPizzaForm from './components/AddPizzaFrom'
import Pizza from './models/Pizza'
import './App.css'
import DisplayPizzas from './components/DisplayPizzas'

// let pizza: string = 'salami'

// let price: number = 20
// let atStock: boolean = true
// let pizzas: string[] =['salami','buter']
// let number: number[]= [20,20,30]

// type Order = {
// 	title: string
// 	quantity: number
// }

// const order: Order = { title: 'margarita', quantity: 10 }

// const orders: Order[] = [
// 	{ title: 'margarita', quantity: 20 },
// 	{ title: 'margarita', quantity: 20 },
// ]

// let number: null | number = null
// number = 10

// type PrintTitler = (title: string) => string

// const printTitler: PrintTitler = title => {
// 	return title
// }
// const test: unknown = 'test'

// type Order = {
// 	title: string
// 	quantity?: number
// }

// interface MyOrder {
// 	title: string
// 	quantity?: number
// }

// type X = {
// 	a: string
// 	b: number
// }
// type Y = X & {
// 	c: string
// 	d: number
// }

// let y: Y ={
//   c: 'test',
//   d:5,
//   a: 'one',
//   b: 10
// }

// interface Auto{
//   country: string
// }

// interface BMW extends Auto{
//   model: string,
//   year: number
// }

// const bmw: BMW ={
//   model:'5',
//   year: 2023,
//   country: 'Ua'
// }


const App: FC = () => {
  const [pizzasList, setPizzasList] = useState<Pizza[]>([])

  const addPizza = (newPizza: Pizza) =>{
    setPizzasList([...pizzasList, newPizza])
  }
 const updatePizza = (newPizza: Pizza) => {
		setPizzasList(pizzasList.map((pizza)=>(pizza.id === newPizza.id ? newPizza:pizza )))
 }
 const deletePizza = (id:number) =>{
  const newPizzaList = pizzasList.filter(pizza=>pizza.id !==id)
  setPizzasList(newPizzaList)
 }
  console.log(pizzasList)
	return (
		<div className='App'>
			<div className='wrap'>
				<span className='heading'>Наша пицерия</span>
				<AddPizzaForm addPizza={addPizza} />
				<DisplayPizzas
					pizzasList={pizzasList}
					updatePizza={updatePizza}
					deletePizza={deletePizza}
				/>
			</div>
		</div>
	)
}

export default App
