import React  from 'react'
import './SortingVisualizer.css';
import { getMergeSortAnimations} from '../SortingAlgorithms/mergeSort_2';
import {getQuickSortAnimations} from '../SortingAlgorithms/quickSort';
import { getHeapSortAnimations } from '../SortingAlgorithms/heapSort';
import {getBubbleSortAnimations} from '../SortingAlgorithms/bubbleSort';

// const sliders = document.getElementsByClassName('slider');
// const number_of_array_bars = sliders[value];


export default class SortingVisualizer extends React.Component{
    constructor(props) {
        super(props);
        // We use the super to access the state
        // Initializing State
        this.state = {
            array: [],
        };
    }
    state = {
        value: 50
    } 
    componentDidMount() {
        //When the component load for the first time
        this.resetArray();
    }
    // This function generates random values for the array
    resetArray() {
        const array = [];
        for (let i = 0; i < this.state.value ; i++){
            array.push(randonIntFromIntervals(10,700));
        }
        this.setState({array});
    }
    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array); // we push the current state of the srray in function
        for (let i = 0; i < animations.length; i++) {
            // We get all the bars for the changes that need to be made in the state of the rendered array
            const arrayBars = document.getElementsByClassName('array-bar');
            // As the first two are for color change we use the below condition
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? 'red' : 'yellow';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i*5);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    // We manupulate the DOM to get the new height 
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                },i*5); // the delay timer
            }
        }
    }
    quickSort(){
        const animations = getQuickSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 4 !== 2 && i%4 !== 3;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 4 === 0 ? 'red' : 'yellow';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 5);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * 5);
            }
        }
    }
    heapSort(){
        const animations = getHeapSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 4 !== 2 && i % 4 !== 3;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 4 === 0 ? 'red' : 'yellow';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 5);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * 5);
            }
        }
    }
    bubbleSort(){
        // As the Algorithnm runs in O(n2) complexity in order to make it quick we have used a timeout of i*2 sec
        const animations = getBubbleSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 4 !== 2 && i % 4 !== 3;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 4 === 0 ? 'red' : 'yellow';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 2);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * 2);
            }
        }

    }
    
    handleOnChange = (e) => this.setState({ value: e.target.value })
    
    render() {
        const {array} = this.state;
            return ( 
                <>
                    <container className = "top-container">
                        <div>
                            <h2 className='value'>Sorting Visualizer</h2>
                        </div>
                        <div>
                            <h2 className='value'>Move the Array Size Slider and Click Generate New Array</h2>
                            <input type="range" min={50} max={151} value={this.state.value} className="slider" onChange={this.handleOnChange} />
                            <h2 className="value"> Array Size = {this.state.value}</h2>
                        </div>

                    </container>
                    <div className="array-container">
                        {array.map((value, idx) => (
                            <div className="array-bar"
                                key={idx}
                                style={{ height: `${value}px` }}></div>
                        ))};
                    </div>
                    <container className="action-Bar">
                        <button className="btn-newArray" onClick={() => this.resetArray()}>Generate New Array</button>
                        <button className="btn-newArray" onClick={() => this.mergeSort()}>Merge Sort</button>
                        <button className="btn-newArray" onClick={() => this.quickSort()}>Quick Sort</button>
                        <button className="btn-newArray" onClick={() => this.heapSort()}>Heap Sort</button>
                        <button className="btn-newArray" onClick={() => this.bubbleSort()}>Bubble Sort</button>

                    </container>
                </> 
               
            );
    }
}

function randonIntFromIntervals(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}