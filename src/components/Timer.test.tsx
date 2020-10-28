import React from "react"

import {screen} from '@testing-library/react'
import {mount, ReactWrapper, shallow, ShallowWrapper} from 'enzyme'
import Timer from './Timer'
import { mockComponent } from "react-dom/test-utils"

describe('Timer',()=>{
    let container: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>

    beforeEach(()=>container=shallow(<Timer/>))

    it('should render <div/>',()=>{
        expect(container.find('div').length).toBeGreaterThanOrEqual(1)
    })
    it('should render <TimerButton/>',()=>{
        expect(container.find('TimerButton').length).toEqual(3)
    })
    
})
describe("Mounted Timer",()=>{
    let container: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
    const setStateFunc = jest.fn();
    
    const useStateMock: any = (initState: any) => [initState=[], setStateFunc];

    
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);
  
  
    
    
    beforeEach(()=>{
        container=mount(<Timer/>)
    })
    afterEach(()=>{
        jest.clearAllMocks()
    })

    it("render startTimer function which will change running state to on",()=>{
        

        container.find('.start-timer').first().simulate('click')
        expect(setStateFunc).toBeCalledWith({running:'on'})

    })
    it("render stopTimer function which will change running state to off",()=>{
        

        container.find('.stop-timer').first().simulate('click')
        expect(setStateFunc).toBeCalledWith({running:'off'})

    })
    it("render resetTimer function which will change state to initial condition",()=>{
        

        container.find('.reset-timer').first().simulate('click')
        expect(setStateFunc).toBeCalledWith({running:'off',minutes:25,seconds:0})

    })
})