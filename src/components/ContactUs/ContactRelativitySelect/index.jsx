import React from 'react';
import { ConfigProvider, Select } from 'antd';
const { Option } = Select;

export default function RelativitySelect({ onChange }) {
    const items = [
        { key:1, value: 'حساب کاربری' },
        { key:2, value: 'خرید و فعالسازی اشتراک' },
        { key:3, value: 'ترافیک مصرفی' },
        { key:4, value: 'مشکلات پخش و قطعی' },
        { key:5, value: 'اپلیکیشن های نماوا' },
        { key:6, value: 'دریافت خطا' },
        { key:7, value: 'محتوا' },
        { key:8, value: 'سایر موضوعات' },
        { key:9, value: 'پیشنهاد و یا انتقاد' }
    ];

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorBgBase: '#f2f2f2',
                    colorBgTextHover: '#ccc',
                },
            }}
        >
            <Select
                showSearch
                className='col-12'
                style={{ height: '3rem' }}
                placeholder="دسته بندی خود را انتخاب کنید"
                optionFilterProp="children"
                filterOption={(input, option) =>
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                onChange={onChange}
            >
                {items.map(item => (
                    <Option key={item.key} value={item.value} className="light-white-font font-16">
                        {item.value}
                    </Option>
                ))}
            </Select>
        </ConfigProvider>
    );
}