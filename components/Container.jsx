import React from 'react';

const Container = ({ children }) => {
    return (
        <div className="mx-auto  w-full max-w-7xl flex flex-col flex-1 items-center">
            {children}
        </div>
    );
};

export default Container;