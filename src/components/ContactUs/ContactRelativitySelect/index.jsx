import React  from 'react';
import { ConfigProvider, Select } from 'antd';
const {Option} = Select
export default function RelativitySelect()  {
    
    const items = [
        {value:'حساب کاربری'},
        {value:'خرید و فعالسازی اشتراک'},
        {value:'ترافیک مصرفی'},
        {value:'مشکلات پخش و قطعی'},
        {value:'اپلیکیشن های نماوا'},
        {value:'دریافت خطا'},
        {value:'محتوا'},
        {value:'سایر موضوعات'},
        {value:'سایر موضوعات'},
        {value:'پیشنهاد و یا انتقاد'}
    ];
    
    
    
    
    return(
        <ConfigProvider
            
            theme={{
                token: {
                    colorBgBase: '#f2f2f2', 
                    colorBgTextHover:'#ccc',

                },
                
            }}
        >
        <Select
        showSearch
        className='col-12'
        style={{height:'3rem'}}
        value="دسته بندی خود را انتخاب کنید"
        optionFilterProp="children"
        filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        >
        {items.map(item => (
            <Option key={item.value} value={item.value} className="light-white-font font-16">
            {item.value}
            </Option>
        ))}
        </Select>
        </ConfigProvider>
    )
}