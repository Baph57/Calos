import React from 'react';
import {connect} from "react-redux"
import { MDBDataTable, MDBBtn } from 'mdbreact';
import "./styles/SideNav.css"

const SideNav = () => {
  const data = {
    columns: [
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Position',
        field: 'position',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Office',
        field: 'office',
        sort: 'asc',
        width: 200
    },
    {
        label: 'Start date',
        field: 'date',
        sort: 'asc',
        width: 150
    },
      {
        label: 'Increment',
        field: 'increment',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Decrement',
        field: 'decrement',
        sort: 'asc',
        width: 100
      }
    ],
    rows: [
      {
        name: 'Tiger Nixon',
        position: 'System Architect',
        office: 'Edinburgh',
        date: '2011/04/25',
        increment: <MDBBtn/>,
        decrement: <MDBBtn/>
      },
      {
        name: 'Garrett Winters',
        position: 'Accountant',
        office: 'Tokyo',
        date: '2011/07/25',
        increment: '63',
        decrement: '$170'
      },
      {
        name: 'Ashton Cox',
        position: 'Junior Technical Author',
        office: 'San Francisco',
        date: '2009/01/12',
        increment: '66',
        decrement: '$86'
      },
      {
        name: 'Cedric Kelly',
        position: 'Senior Javascript Developer',
        office: 'Edinburgh',
        date: '2012/03/29',
        increment: '22',
        decrement: '$433'
      },
      {
        name: 'Airi Satou',
        position: 'Accountant',
        office: 'Tokyo',
        date: '2008/11/28',
        increment: '33',
        decrement: '$162'
      },
      {
        name: 'Brielle Williamson',
        position: 'Integration Specialist',
        office: 'New York',
        date: '2012/12/02',
        increment: '61',
        decrement: '$372'
      },
      {
        name: 'Herrod Chandler',
        position: 'Sales Assistant',
        office: 'San Francisco',
        date: '2012/08/06',
        increment: '59',
        decrement: '$137'
      },
      {
        name: 'Rhona Davidson',
        position: 'Integration Specialist',
        office: 'Tokyo',
        date: '2010/10/14',
        increment: '55',
        decrement: '$327'
      },
      {
        name: 'Colleen Hurst',
        position: 'Javascript Developer',
        office: 'San Francisco',
        date: '2009/09/15',
        increment: '39',
        decrement: '$205'
      },
      {
        name: 'Sonya Frost',
        position: 'Software Engineer',
        office: 'Edinburgh',
        date: '2008/12/13',
        increment: '23',
        decrement: '$103'
      },
      {
        name: 'Jena Gaines',
        position: 'Office Manincrementr',
        office: 'London',
        date: '2008/12/19',
        increment: '30',
        decrement: '$90'
      },
      {
        name: 'Quinn Flynn',
        position: 'Support Lead',
        office: 'Edinburgh',
        date: '2013/03/03',
        increment: '22',
        decrement: '$342'
      },
      {
        name: 'Charde Marshall',
        position: 'Regional Director',
        office: 'San Francisco',
        date: '2008/10/16',
        increment: '36',
        decrement: '$470'
      },
      {
        name: 'Haley Kennedy',
        position: 'Senior Marketing Designer',
        office: 'London',
        date: '2012/12/18',
        increment: '43',
        decrement: '$313'
      },
      {
        name: 'Tatyana Fitzpatrick',
        position: 'Regional Director',
        office: 'London',
        date: '2010/03/17',
        increment: '19',
        decrement: '$385'
      },
      {
        name: 'Michael Silva',
        position: 'Marketing Designer',
        office: 'London',
        date: '2012/11/27',
        increment: '66',
        decrement: '$198'
      },
      {
        name: 'Paul Byrd',
        position: 'Chief Financial Officer (CFO)',
        office: 'New York',
        date: '2010/06/09',
        increment: '64',
        decrement: '$725'
      },
      {
        name: 'Gloria Little',
        position: 'Systems Administrator',
        office: 'New York',
        date: '2009/04/10',
        increment: '59',
        decrement: '$237'
      },
      {
        name: 'Bradley Greer',
        position: 'Software Engineer',
        office: 'London',
        date: '2012/10/13',
        increment: '41',
        decrement: '$132'
      },
      {
        name: 'Dai Rios',
        position: 'Personnel Lead',
        office: 'Edinburgh',
        date: '2012/09/26',
        increment: '35',
        decrement: '$217'
      },
      {
        name: 'Jenette Caldwell',
        position: 'Development Lead',
        office: 'New York',
        date: '2011/09/03',
        increment: '30',
        decrement: '$345'
      },
      {
        name: 'Yuri Berry',
        position: 'Chief Marketing Officer (CMO)',
        office: 'New York',
        date: '2009/06/25',
        increment: '40',
        decrement: '$675'
      },
      {
        name: 'Caesar Vance',
        position: 'Pre-Sales Support',
        office: 'New York',
        date: '2011/12/12',
        increment: '21',
        decrement: '$106'
      },
      {
        name: 'Doris Wilder',
        position: 'Sales Assistant',
        office: 'Sidney',
        date: '2010/09/20',
        increment: '23',
        decrement: '$85'
      },
      {
        name: 'Angelica Ramos',
        position: 'Chief Executive Officer (CEO)',
        office: 'London',
        date: '2009/10/09',
        increment: '47',
        decrement: '$1'
      },
      {
        name: 'Gavin Joyce',
        position: 'Developer',
        office: 'Edinburgh',
        date: '2010/12/22',
        increment: '42',
        decrement: '$92'
      },
      {
        name: 'Jennifer Chang',
        position: 'Regional Director',
        office: 'Singapore',
        date: '2010/11/14',
        increment: '28',
        decrement: '$357'
      },
      {
        name: 'Brenden Wagner',
        position: 'Software Engineer',
        office: 'San Francisco',
        date: '2011/06/07',
        increment: '28',
        decrement: '$206'
      },
      {
        name: 'Fiona Green',
        position: 'Chief Operating Officer (COO)',
        office: 'San Francisco',
        date: '2010/03/11',
        increment: '48',
        decrement: '$850'
      },
      {
        name: 'Shou Itou',
        position: 'Regional Marketing',
        office: 'Tokyo',
        date: '2011/08/14',
        increment: '20',
        decrement: '$163'
      },
      {
        name: 'Michelle House',
        position: 'Integration Specialist',
        office: 'Sidney',
        date: '2011/06/02',
        increment: '37',
        decrement: '$95'
      },
      {
        name: 'Suki Burks',
        position: 'Developer',
        office: 'London',
        date: '2009/10/22',
        increment: '53',
        decrement: '$114'
      },
      {
        name: 'Prescott Bartlett',
        position: 'Technical Author',
        office: 'London',
        date: '2011/05/07',
        increment: '27',
        decrement: '$145'
      },
      {
        name: 'Gavin Cortez',
        position: 'Team Leader',
        office: 'San Francisco',
        date: '2008/10/26',
        increment: '22',
        decrement: '$235'
      },
      {
        name: 'Martena Mccray',
        position: 'Post-Sales support',
        office: 'Edinburgh',
        date: '2011/03/09',
        increment: '46',
        decrement: '$324'
      },
      {
        name: 'Unity Butler',
        position: 'Marketing Designer',
        office: 'San Francisco',
        date: '2009/12/09',
        increment: '47',
        decrement: '$85'
      },
      {
        name: 'Howard Hatfield',
        position: 'Office Manincrementr',
        office: 'San Francisco',
        date: '2008/12/16',
        increment: '51',
        decrement: '$164'
      },
      {
        name: 'Hope Fuentes',
        position: 'Secretary',
        office: 'San Francisco',
        date: '2010/02/12',
        increment: '41',
        decrement: '$109'
      },
      {
        name: 'Vivian Harrell',
        position: 'Financial Controller',
        office: 'San Francisco',
        date: '2009/02/14',
        increment: '62',
        decrement: '$452'
      },
      {
        name: 'Timothy Mooney',
        position: 'Office Manincrementr',
        office: 'London',
        date: '2008/12/11',
        increment: '37',
        decrement: '$136'
      },
      {
        name: 'Jackson Bradshaw',
        position: 'Director',
        office: 'New York',
        date: '2008/09/26',
        increment: '65',
        decrement: '$645'
      },
      {
        name: 'Olivia Liang',
        position: 'Support Engineer',
        office: 'Singapore',
        date: '2011/02/03',
        increment: '64',
        decrement: '$234'
      },
      {
        name: 'Bruno Nash',
        position: 'Software Engineer',
        office: 'London',
        date: '2011/05/03',
        increment: '38',
        decrement: '$163'
      },
      {
        name: 'Sakura Yamamoto',
        position: 'Support Engineer',
        office: 'Tokyo',
        date: '2009/08/19',
        increment: '37',
        decrement: '$139'
      },
      {
        name: 'Thor Walton',
        position: 'Developer',
        office: 'New York',
        date: '2013/08/11',
        increment: '61',
        decrement: '$98'
      },
      {
        name: 'Finn Camacho',
        position: 'Support Engineer',
        office: 'San Francisco',
        date: '2009/07/07',
        increment: '47',
        decrement: '$87'
      },
      {
        name: 'Serge Baldwin',
        position: 'Data Coordinator',
        office: 'Singapore',
        date: '2012/04/09',
        increment: '64',
        decrement: '$138'
      },
      {
        name: 'Zenaida Frank',
        position: 'Software Engineer',
        office: 'New York',
        date: '2010/01/04',
        increment: '63',
        decrement: '$125'
      },
      {
        name: 'Zorita Serrano',
        position: 'Software Engineer',
        office: 'San Francisco',
        date: '2012/06/01',
        increment: '56',
        decrement: '$115'
      },
      {
        name: 'Jennifer Acosta',
        position: 'Junior Javascript Developer',
        office: 'Edinburgh',
        date: '2013/02/01',
        increment: '43',
        decrement: '$75'
      },
      {
        name: 'Cara Stevens',
        position: 'Sales Assistant',
        office: 'New York',
        date: '2011/12/06',
        increment: '46',
        decrement: '$145'
      },
      {
        name: 'Hermione Butler',
        position: 'Regional Director',
        office: 'London',
        date: '2011/03/21',
        increment: '47',
        decrement: '$356'
      },
      {
        name: 'Lael Greer',
        position: 'Systems Administrator',
        office: 'London',
        date: '2009/02/27',
        increment: '21',
        decrement: '$103'
      },
      {
        name: 'Jonas Alexander',
        position: 'Developer',
        office: 'San Francisco',
        date: '2010/07/14',
        increment: '30',
        decrement: '$86'
      },
      {
        name: 'Shad Decker',
        position: 'Regional Director',
        office: 'Edinburgh',
        date: '2008/11/13',
        increment: '51',
        decrement: '$183'
      },
      {
        name: 'Michael Bruce',
        position: 'Javascript Developer',
        office: 'Singapore',
        date: '2011/06/27',
        increment: '29',
        decrement: '$183'
      },
      {
        name: 'Donna Snider',
        position: 'Customer Support',
        office: 'New York',
        date: '2011/01/25',
        increment: '27',
        decrement: '$112'
      }
    ]
  };

  return (
    <MDBDataTable
        className="SideNav"
        striped
        bordered
        hover
        data={data}
    />
  );
}

export default connect(null,null)(SideNav);