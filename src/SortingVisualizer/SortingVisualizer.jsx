import React from 'react'
import './SortingVisualizer.css';
import { getMergeSortAnimations} from '../SortingAlgorithms/mergeSort_2';
import {getQuickSortAnimations} from '../SortingAlgorithms/quickSort';
import { getHeapSortAnimations } from '../SortingAlgorithms/heapSort';

export default class SortingVisualizer extends React.Component{
    constructor(props) {
        super(props);
        // We use the super to access the state
        // Initializing State
        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        //When the component load for the first time
        this.resetArray();
    }
    // This function generates random values for the array
    resetArray() {
        const array = [];
        for(let i = 0 ; i< 151 ; i++){
            array.push(randonIntFromIntervals(5,1000));
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
                const color = i % 3 === 0 ? 'red' : 'turquoise';
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
                const color = i % 4 === 0 ? 'red' : 'turquoise';
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
                const color = i % 4 === 0 ? 'red' : 'turquoise';
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
    render() {
        const {array} = this.state;
            return ( 
                <>
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
                        

                    </container>
                </> 
               
            );
    }
}

function randonIntFromIntervals(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}