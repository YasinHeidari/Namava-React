import React from 'react';
import { Select } from 'antd';
const {Option} = Select
export default function CountryPopup()  {
  <Select className='select w-100 border-radius-12'
    showSearch
    
    placeholder="Search to Select"
    optionFilterProp="children"
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
    }>
    {[
    { label: 'Afghanistan', value: '(+93)', ccTLD: 'AF' },
    { label: 'Aland Islands', value: '(+358)', ccTLD: 'AX' },
    { label: 'Albania', value: '(+355)', ccTLD: 'AL' },
    { label: 'Algeria', value: '(+213)', ccTLD: 'DZ' },
    { label: 'American Samoa', value: '(+1684)', ccTLD: 'AS' },
    { label: 'Andorra', value: '(+376)', ccTLD: 'AD' },
    { label: 'Angola', value: '(+244)', ccTLD: 'AO' },
    { label: 'Anguilla', value: '(+1264)', ccTLD: 'AI' },
    { label: 'Antarctica', value: '(+672)', ccTLD: 'AQ' },
    { label: 'Antigua and Barbuda', value: '(+1268)', ccTLD: 'AG' },
    { label: 'Argentina', value: '(+54)', ccTLD: 'AR' },
    { label: 'Armenia', value: '(+374)', ccTLD: 'AM' },
    { label: 'Aruba', value: '(+297)', ccTLD: 'AW' },
    { label: 'Australia', value: '(+61)', ccTLD: 'AU' },
    { label: 'Austria', value: '(+43)', ccTLD: 'AT' },
    { label: 'Azerbaijan', value: '(+994)', ccTLD: 'AZ' },
    { label: 'Bahamas', value: '(+1242)', ccTLD: 'BS' },
    { label: 'Bahrain', value: '(+973)', ccTLD: 'BH' },
    { label: 'Bangladesh', value: '(+880)', ccTLD: 'BD' },
    { label: 'Barbados', value: '(+1246)', ccTLD: 'BB' },
    { label: 'Belarus', value: '(+375)', ccTLD: 'BY' },
    { label: 'Belgium', value: '(+32)', ccTLD: 'BE' },
    { label: 'Belize', value: '(+501)', ccTLD: 'BZ' },
    { label: 'Benin', value: '(+229)', ccTLD: 'BJ' },
    { label: 'Bermuda', value: '(+1441)', ccTLD: 'BM' },
    { label: 'Bhutan', value: '(+975)', ccTLD: 'BT' },
    { label: 'Bolivia', value: '(+591)', ccTLD: 'BO' },
    { label: 'Bonaire, Sint Eustatius and Saba', value: '(+599)', ccTLD: 'BQ' },
    { label: 'Bosnia and Herzegovina', value: '(+387)', ccTLD: 'BA' },
    { label: 'Botswana', value: '(+267)', ccTLD: 'BW' },
    { label: 'Bouvet Island', value: '(+55)', ccTLD: 'BV' },
    { label: 'Brazil', value: '(+55)', ccTLD: 'BR' },
    { label: 'British Indian Ocean Territory', value: '(+246)', ccTLD: 'IO' },
    { label: 'Brunei Darussalam', value: '(+673)', ccTLD: 'BN' },
    { label: 'Bulgaria', value: '(+359)', ccTLD: 'BG' },
    { label: 'Burkina Faso', value: '(+226)', ccTLD: 'BF' },
    { label: 'Burundi', value: '(+257)', ccTLD: 'BI' },
    { label: 'Cambodia', value: '(+855)', ccTLD: 'KH' },
    { label: 'Cameroon', value: '(+237)', ccTLD: 'CM' },
    { label: 'Canada', value: '(+1)', ccTLD: 'CA' },
    { label: 'Cape Verde', value: '(+238)', ccTLD: 'CV' },
    { label: 'Cayman Islands', value: '(+1345)', ccTLD: 'KY' },
    { label: 'Central African Republic', value: '(+236)', ccTLD: 'CF' },
    { label: 'Chad', value: '(+235)', ccTLD: 'TD' },
    { label: 'Chile', value: '(+56)', ccTLD: 'CL' },
    { label: 'China', value: '(+86)', ccTLD: 'CN' },
    { label: 'Christmas Island', value: '(+61)', ccTLD: 'CX' },
    { label: 'Cocos (Keeling) Islands', value: '(+672)', ccTLD: 'CC' },
    { label: 'Colombia', value: '(+57)', ccTLD: 'CO' },
    { label: 'Comoros', value: '(+269)', ccTLD: 'KM' },
    { label: 'Congo', value: '(+242)', ccTLD: 'CG' },
    { label: 'Congo, Democratic Republic of the Congo', value: '(+242)', ccTLD: 'CD' },
    { label: 'Cook Islands', value: '(+682)', ccTLD: 'CK' },
    { label: 'Costa Rica', value: '(+506)', ccTLD: 'CR' },
    { label: "Cote D'Ivoire", value: '(+225)', ccTLD: 'CI' },
    { label: 'Croatia', value: '(+385)', ccTLD: 'HR' },
    { label: 'Cuba', value: '(+53)', ccTLD: 'CU' },
    { label: 'Curacao', value: '(+599)', ccTLD: 'CW' },
    { label: 'Cyprus', value: '(+357)', ccTLD: 'CY' },
    { label: 'Czech Republic', value: '(+420)', ccTLD: 'CZ' },
    { label: 'Denmark', value: '(+45)', ccTLD: 'DK' },
    { label: 'Djibouti', value: '(+253)', ccTLD: 'DJ' },
    { label: 'Dominica', value: '(+1767)', ccTLD: 'DM' },
    { label: 'Dominican Republic', value: '(+1809)', ccTLD: 'DO' },
    { label: 'Ecuador', value: '(+593)', ccTLD: 'EC' },
    { label: 'Egypt', value: '(+20)', ccTLD: 'EG' },
    { label: 'El Salvador', value: '(+503)', ccTLD: 'SV' },
    { label: 'Equatorial Guinea', value: '(+240)', ccTLD: 'GQ' },
    { label: 'Eritrea', value: '(+291)', ccTLD: 'ER' },
    { label: 'Estonia', value: '(+372)', ccTLD: 'EE' },
    { label: 'Ethiopia', value: '(+251)', ccTLD: 'ET' },
    { label: 'Falkland Islands (Malvinas)', value: '(+500)', ccTLD: 'FK' },
    { label: 'Faroe Islands', value: '(+298)', ccTLD: 'FO' },
    { label: 'Fiji', value: '(+679)', ccTLD: 'FJ' },
    { label: 'Finland', value: '(+358)', ccTLD: 'FI' },
    { label: 'France', value: '(+33)', ccTLD: 'FR' },
    { label: 'French Guiana', value: '(+594)', ccTLD: 'GF' },
    { label: 'French Polynesia', value: '(+689)', ccTLD: 'PF' },
    { label: 'French Southern Territories', value: '(+262)', ccTLD: 'TF' },
    { label: 'Gabon', value: '(+241)', ccTLD: 'GA' },
    { label: 'Gambia', value: '(+220)', ccTLD: 'GM' },
    { label: 'Georgia', value: '(+995)', ccTLD: 'GE' },
    { label: 'Germany', value: '(+49)', ccTLD: 'DE' },
    { label: 'Ghana', value: '(+233)', ccTLD: 'GH' },
    { label: 'Gibraltar', value: '(+350)', ccTLD: 'GI' },
    { label: 'Greece', value: '(+30)', ccTLD: 'GR' },
    { label: 'Greenland', value: '(+299)', ccTLD: 'GL' },
    { label: 'Grenada', value: '(+1473)', ccTLD: 'GD' },
    { label: 'Guadeloupe', value: '(+590)', ccTLD: 'GP' },
    { label: 'Guam', value: '(+1671)', ccTLD: 'GU' },
    { label: 'Guatemala', value: '(+502)', ccTLD: 'GT' },
    { label: 'Guernsey', value: '(+44)', ccTLD: 'GG' },
    { label: 'Guinea', value: '(+224)', ccTLD: 'GN' },
    { label: 'Guinea-Bissau', value: '(+245)', ccTLD: 'GW' },
    { label: 'Guyana', value: '(+592)', ccTLD: 'GY' },
    { label: 'Haiti', value: '(+509)', ccTLD: 'HT' },
    { label: 'Heard Island and Mcdonald Islands', value: '(+672)', ccTLD: 'HM' },
    { label: 'Holy See (Vatican City State)', value: '(+379)', ccTLD: 'VA' },
    { label: 'Honduras', value: '(+504)', ccTLD: 'HN' },
    { label: 'Hong Kong', value: '(+852)', ccTLD: 'HK' },
    { label: 'Hungary', value: '(+36)', ccTLD: 'HU' },
    { label: 'Iceland', value: '(+354)', ccTLD: 'IS' },
    { label: 'India', value: '(+91)', ccTLD: 'IN' },
    { label: 'Indonesia', value: '(+62)', ccTLD: 'ID' },
    { label: 'Iran, Islamic Republic of Persian Gulf', value: '(+98)', ccTLD: 'IR' },
    { label: 'Iraq', value: '(+964)', ccTLD: 'IQ' },
    { label: 'Ireland', value: '(+353)', ccTLD: 'IE' },
    { label: 'Isle of Man', value: '(+44)', ccTLD: 'IM' },
    { label: 'Israel', value: '(+972)', ccTLD: 'IL' },
    { label: 'Italy', value: '(+39)', ccTLD: 'IT' },
    { label: 'Jamaica', value: '(+1876)', ccTLD: 'JM' },
    { label: 'Japan', value: '(+81)', ccTLD: 'JP' },
    { label: 'Jersey', value: '(+44)', ccTLD: 'JE' },
    { label: 'Jordan', value: '(+962)', ccTLD: 'JO' },
    { label: 'Kazakhstan', value: '(+7)', ccTLD: 'KZ' },
    { label: 'Kenya', value: '(+254)', ccTLD: 'KE' },
    { label: 'Kiribati', value: '(+686)', ccTLD: 'KI' },
    { label: 'Korea, Democratic People\'s Republic of Korea', value: '(+850)', ccTLD: 'KP' },
    { label: 'Korea, Republic of South Korea', value: '(+82)', ccTLD: 'KR' },
    { label: 'Kosovo', value: '(+383)', ccTLD: 'XK' },
    { label: 'Kuwait', value: '(+965)', ccTLD: 'KW' },
    { label: 'Kyrgyzstan', value: '(+996)', ccTLD: 'KG' },
    { label: 'Lao People\'s Democratic Republic', value: '(+856)', ccTLD: 'LA' },
    { label: 'Latvia', value: '(+371)', ccTLD: 'LV' },
    { label: 'Lebanon', value: '(+961)', ccTLD: 'LB' },
    { label: 'Lesotho', value: '(+266)', ccTLD: 'LS' },
    { label: 'Liberia', value: '(+231)', ccTLD: 'LR' },
    { label: 'Libyan Arab Jamahiriya', value: '(+218)', ccTLD: 'LY' },
    { label: 'Liechtenstein', value: '(+423)', ccTLD: 'LI' },
    { label: 'Lithuania', value: '(+370)', ccTLD: 'LT' },
    { label: 'Luxembourg', value: '(+352)', ccTLD: 'LU' },
    { label: 'Macao', value: '(+853)', ccTLD: 'MO' },
    { label: 'Macedonia', value: '(+389)', ccTLD: 'MK' },
    { label: 'Madagascar', value: '(+261)', ccTLD: 'MG' },
    { label: 'Malawi', value: '(+265)', ccTLD: 'MW' },
    { label: 'Malaysia', value: '(+60)', ccTLD: 'MY' },
    { label: 'Maldives', value: '(+960)', ccTLD: 'MV' },
    { label: 'Mali', value: '(+223)', ccTLD: 'ML' },
    { label: 'Malta', value: '(+356)', ccTLD: 'MT' },
    { label: 'Marshall Islands', value: '(+692)', ccTLD: 'MH' },
    { label: 'Martinique', value: '(+596)', ccTLD: 'MQ' },
    { label: 'Mauritania', value: '(+222)', ccTLD: 'MR' },
    { label: 'Mauritius', value: '(+230)', ccTLD: 'MU' },
    { label: 'Mayotte', value: '(+262)', ccTLD: 'YT' },
    { label: 'Mexico', value: '(+52)', ccTLD: 'MX' },
    { label: 'Micronesia, Federated States of Micronesia', value: '(+691)', ccTLD: 'FM' },
    { label: 'Moldova', value: '(+373)', ccTLD: 'MD' },
    { label: 'Monaco', value: '(+377)', ccTLD: 'MC' },
    { label: 'Mongolia', value: '(+976)', ccTLD: 'MN' },
    { label: 'Montenegro', value: '(+382)', ccTLD: 'ME' },
    { label: 'Montserrat', value: '(+1664)', ccTLD: 'MS' },
    { label: 'Morocco', value: '(+212)', ccTLD: 'MA' },
    { label: 'Mozambique', value: '(+258)', ccTLD: 'MZ' },
    { label: 'Myanmar', value: '(+95)', ccTLD: 'MM' },
    { label: 'Namibia', value: '(+264)', ccTLD: 'NA' },
    { label: 'Nauru', value: '(+674)', ccTLD: 'NR' },
    { label: 'Nepal', value: '(+977)', ccTLD: 'NP' },
    { label: 'Netherlands', value: '(+31)', ccTLD: 'NL' },
    { label: 'Netherlands Antilles', value: '(+599)', ccTLD: 'AN' },
    { label: 'New Caledonia', value: '(+687)', ccTLD: 'NC' },
    { label: 'New Zealand', value: '(+64)', ccTLD: 'NZ' },
    { label: 'Nicaragua', value: '(+505)', ccTLD: 'NI' },
    { label: 'Niger', value: '(+227)', ccTLD: 'NE' },
    { label: 'Nigeria', value: '(+234)', ccTLD: 'NG' },
    { label: 'Niue', value: '(+683)', ccTLD: 'NU' },
    { label: 'Norfolk Island', value: '(+672)', ccTLD: 'NF' },
    { label: 'Northern Mariana Islands', value: '(+1670)', ccTLD: 'MP' },
    { label: 'Norway', value: '(+47)', ccTLD: 'NO' },
    { label: 'Oman', value: '(+968)', ccTLD: 'OM' },
    { label: 'Pakistan', value: '(+92)', ccTLD: 'PK' },
    { label: 'Palau', value: '(+680)', ccTLD: 'PW' },
    { label: 'Palestinian Territory, Occupied', value: '(+970)', ccTLD: 'PS' },
    { label: 'Panama', value: '(+507)', ccTLD: 'PA' },
    { label: 'Papua New Guinea', value: '(+675)', ccTLD: 'PG' },
    { label: 'Paraguay', value: '(+595)', ccTLD: 'PY' },
    { label: 'Peru', value: '(+51)', ccTLD: 'PE' },
    { label: 'Philippines', value: '(+63)', ccTLD: 'PH' },
    { label: 'Pitcairn', value: '(+64)', ccTLD: 'PN' },
    { label: 'Poland', value: '(+48)', ccTLD: 'PL' },
    { label: 'Portugal', value: '(+351)', ccTLD: 'PT' },
    { label: 'Puerto Rico', value: '(+1787)', ccTLD: 'PR' },
    { label: 'Qatar', value: '(+974)', ccTLD: 'QA' },
    { label: 'Romania', value: '(+40)', ccTLD: 'RO' },
    { label: 'Russia', value: '(+7)', ccTLD: 'RU' },
    { label: 'Rwanda', value: '(+250)', ccTLD: 'RW' },
    { label: 'Reunion', value: '(+262)', ccTLD: 'RE' },
    { label: 'Saint Barthelemy', value: '(+590)', ccTLD: 'BL' },
    { label: 'Saint Helena, Ascension and Tristan Da Cunha', value: '(+290)', ccTLD: 'SH' },
    { label: 'Saint Kitts and Nevis', value: '(+1869)', ccTLD: 'KN' },
    { label: 'Saint Lucia', value: '(+1758)', ccTLD: 'LC' },
    { label: 'Saint Martin', value: '(+590)', ccTLD: 'MF' },
    { label: 'Saint Pierre and Miquelon', value: '(+508)', ccTLD: 'PM' },
    { label: 'Saint Vincent and the Grenadines', value: '(+1784)', ccTLD: 'VC' },
    { label: 'Samoa', value: '(+685)', ccTLD: 'WS' },
    { label: 'San Marino', value: '(+378)', ccTLD: 'SM' },
    { label: 'Sao Tome and Principe', value: '(+239)', ccTLD: 'ST' },
    { label: 'Saudi Arabia', value: '(+966)', ccTLD: 'SA' },
    { label: 'Senegal', value: '(+221)', ccTLD: 'SN' },
    { label: 'Serbia', value: '(+381)', ccTLD: 'RS' },
    { label: 'Seychelles', value: '(+248)', ccTLD: 'SC' },
    { label: 'Sierra Leone', value: '(+232)', ccTLD: 'SL' },
    { label: 'Singapore', value: '(+65)', ccTLD: 'SG' },
    { label: 'Slovakia', value: '(+421)', ccTLD: 'SK' },
    { label: 'Slovenia', value: '(+386)', ccTLD: 'SI' },
    { label: 'Solomon Islands', value: '(+677)', ccTLD: 'SB' },
    { label: 'Somalia', value: '(+252)', ccTLD: 'SO' },
    { label: 'South Africa', value: '(+27)', ccTLD: 'ZA' },
    { label: 'South Sudan', value: '(+211)', ccTLD: 'SS' },
    { label: 'South Georgia and the South Sandwich Islands', value: '(+500)', ccTLD: 'GS' },
    { label: 'Spain', value: '(+34)', ccTLD: 'ES' },
    { label: 'Sri Lanka', value: '(+94)', ccTLD: 'LK' },
    { label: 'Sudan', value: '(+249)', ccTLD: 'SD' },
    { label: 'Suriname', value: '(+597)', ccTLD: 'SR' },
    { label: 'Svalbard and Jan Mayen', value: '(+47)', ccTLD: 'SJ' },
    { label: 'Swaziland', value: '(+268)', ccTLD: 'SZ' },
    { label: 'Sweden', value: '(+46)', ccTLD: 'SE' },
    { label: 'Switzerland', value: '(+41)', ccTLD: 'CH' },
    { label: 'Syrian Arab Republic', value: '(+963)', ccTLD: 'SY' },
    { label: 'Taiwan', value: '(+886)', ccTLD: 'TW' },
    { label: 'Tajikistan', value: '(+992)', ccTLD: 'TJ' },
    { label: 'Tanzania, United Republic of Tanzania', value: '(+255)', ccTLD: 'TZ' },
    { label: 'Thailand', value: '(+66)', ccTLD: 'TH' },
    { label: 'Timor-Leste', value: '(+670)', ccTLD: 'TL' },
    { label: 'Togo', value: '(+228)', ccTLD: 'TG' },
    { label: 'Tokelau', value: '(+690)', ccTLD: 'TK' },
    { label: 'Tonga', value: '(+676)', ccTLD: 'TO' },
    { label: 'Trinidad and Tobago', value: '(+1868)', ccTLD: 'TT' },
    { label: 'Tunisia', value: '(+216)', ccTLD: 'TN' },
    { label: 'Turkey', value: '(+90)', ccTLD: 'TR' },
    { label: 'Turkmenistan', value: '(+993)', ccTLD: 'TM' },
    { label: 'Turks and Caicos Islands', value: '(+1649)', ccTLD: 'TC' },
    { label: 'Tuvalu', value: '(+688)', ccTLD: 'TV' },
    { label: 'Uganda', value: '(+256)', ccTLD: 'UG' },
    { label: 'Ukraine', value: '(+380)', ccTLD: 'UA' },
    { label: 'United Arab Emirates', value: '(+971)', ccTLD: 'AE' },
    { label: 'United Kingdom', value: '(+44)', ccTLD: 'GB' },
    { label: 'United States', value: '(+1)', ccTLD: 'US' },
    { label: 'Uruguay', value: '(+598)', ccTLD: 'UY' },
    { label: 'Uzbekistan', value: '(+998)', ccTLD: 'UZ' },
    { label: 'Vanuatu', value: '(+678)', ccTLD: 'VU' },
    { label: 'Venezuela, Bolivarian Republic of Venezuela', value: '(+58)', ccTLD: 'VE' },
    { label: 'Vietnam', value: '(+84)', ccTLD: 'VN' },
    { label: 'Virgin Islands, British', value: '(+1284)', ccTLD: 'VG' },
    { label: 'Virgin Islands, U.S.', value: '(+1340)', ccTLD: 'VI' },
    { label: 'Wallis and Futuna', value: '(+681)', ccTLD: 'WF' },
    { label: 'Yemen', value: '(+967)', ccTLD: 'YE' },
    { label: 'Zambia', value: '(+260)', ccTLD: 'ZM' },
    { label: 'Zimbabwe', value: '(+263)', ccTLD: 'ZW' }
]
.map(option => (
            <Option className="lt" key={option.value} value={option.value}>
                <span>{option.ccTLD}</span> {`${option.label}  ${option.value}`}
            </Option>
            ))}
  </Select>
};

/*import React, { useState , useMemo } from 'react';


const CountryPopup = React.memo(({ options, onSelect, handleOutsideClick }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedValue, setSelectedValue] = useState("");

    const filteredOptions = useMemo(() => {
        return options.filter((option) =>
            option.label.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [options, searchTerm]);

    const handleSelectChange = (e) => {
        const selectedOption = e.target.value;
        setSelectedValue(selectedOption);
        onSelect(selectedOption);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div
            className="CountryPopUp position-absolute z-1 top-50 right-50 popup-select-options"
            onClick={handleOutsideClick}
        >
            <input
                type="text"
                placeholder="Search options"
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <select value={selectedValue} onChange={handleSelectChange}>
                <option value="">Select an option</option>
                {filteredOptions.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.ccTLD} {option.label} (+{option.value})
                    </option>
                ))}
            </select>
        </div>
    );
});


export default CountryPopup;*/
