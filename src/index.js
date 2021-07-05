import _ from 'lodash'
import './style.css'
import Icon from './icon.jpg'
//works only for default imports!
import Data from './data.xml'
import Notes from './data.csv'

function component() {
	const element = document.createElement('div')

	// Lodash, nor imported by this script
	element.innerHTML = _.join(['Hello', 'webpack'], ' ')
	element.classList.add('hello')

	// Add the image to our existing div.
	const myIcon = new Image()
	myIcon.src = Icon

	element.appendChild(myIcon)

	console.log(Data)
	console.log(Notes)

	return element
}

document.body.appendChild(component())
//TODO don't forget to install
//npm install --save-dev style-loader css-loader
//npm install --save-dev csv-loader xml-loader
