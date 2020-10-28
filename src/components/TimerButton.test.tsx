import React from "react"
import {shallow, ShallowWrapper} from 'enzyme'
import TimerButton from './TimerButton'

describe('Timer',()=>{
    let container: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>

    beforeEach(()=>container=shallow(<TimerButton action={jest.fn()} value={""} className=""/>))

    it('should render <div/>',()=>{
        expect(container.find('div').length).toBeGreaterThanOrEqual(1)
    })
    
    
})