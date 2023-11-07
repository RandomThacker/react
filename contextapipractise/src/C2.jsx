import React from 'react'
import { data, data1 } from './App'

function C2() {
  return (
        <data.Consumer>
            {
            (name)=>{
                return(
                    <data1.Consumer>
                        {
                            (caste)=>{
                                return(
                    <div>{name} is {caste}</div>
                                )
                            }
                        }

                    </data1.Consumer>

                )
            }
        }
        </data.Consumer>
  )
}

export default C2

// Since we have to create a context for all variable and called so it becomes very hectic when we have multiple variables. The work around for this is Context Hook.