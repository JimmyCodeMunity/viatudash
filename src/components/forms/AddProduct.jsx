import React from 'react';
import { Icon } from '../Icon';

const AddProductForm = () => {
    return (
        <div>
            <div className="w-full h-20 add-component-head" />
            <div
                className="flex flex-col items-center"
                style={{
                    transform: 'translate(0, -40px)',
                }}
            >
                
                <div className="text-white font-bold mt-3">
                    Add new Product
                </div>
                <div className="mt-2">Simply create your first component</div>
                <div className="mt-1">Just click on the button</div>
                <div
                    className="flex items-center p-3 mt-3"
                    style={{
                        background: '#2f49d1',
                        borderRadius: '15px',
                        padding: '8px 16px',
                        justifyContent: 'center',
                        color: 'white',
                    }}
                >
                    <Icon path="res-react-dash-add-component" className="w-5 h-5" />
                    <div className="ml-2">Add Component</div>
                    <div
                        className="ml-2"
                        style={{
                            background: '#4964ed',
                            borderRadius: '15px',
                            padding: '4px 8px 4px 8px',
                        }}
                    >
                        129
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddProductForm;
