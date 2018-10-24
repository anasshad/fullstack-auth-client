import React from 'react';

import TopMenu from './TopMenu';

const TopMenuHOC = (WrappedComponent) => {
        
        return class HOC extends React.Component {
            render() {
                return (
                    <div>
                        <TopMenu {...this.props} />
                        <WrappedComponent {...this.props}/>
                        
                    </div>
                )
            }
        }
    
}

export default TopMenuHOC;