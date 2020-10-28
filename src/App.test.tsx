import React from "react"
import {shallow, ShallowWrapper} from 'enzyme'
import App from './App'
import Timer from './components/Timer'

describe('App',()=>{
  let container: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>

  beforeEach(()=>(container=shallow(<App/>)))
  it('should render a <div/>',()=>{
    expect(container.find('div').length).toEqual(1)
  })

  it('should render component Timer',()=>{
    expect(container.containsMatchingElement(<Timer/>)).toEqual(true)
  })
})
