import React, { useState } from 'react';
import EditButton from './EditButton';
import doc from '/src/assets/images/doc.svg'
import edit from '/src/assets/images/edit.svg'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

const LegalProfile = () => {
  // Sample user data
  const [userData, setUserData] = useState({
    company: '"BAZIS DIGITAL" ООО',
    tel: ['+998 90 124-25-25', '+998 90 124-25-25'],
    addresses: ['г. Ташкент, улица Мукими, 166 ...', 'г. Ташкент, улица Арнасай, 2 ...'],
  });

  const [loader, setLoader] = useState(false);

  const downloadPDF = () =>{
    const capture = document.querySelector('.dogovor');
    setLoader(true);
    html2canvas(capture).then((canvas)=>{
      const imgData = canvas.toDataURL('img/png');
      const doc = new jsPDF('p', 'mm', 'a4');
      const componentWidth = doc.internal.pageSize.getWidth()*0.95;
      const componentHeight = doc.internal.pageSize.getHeight()*0.6;
      doc.addImage(imgData, 'PNG', 5, 5, componentWidth, componentHeight);
      setLoader(false);
      doc.save('dogovor.pdf');
    })
  }

//   const [isEditing, setIsEditing] = useState(false);

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleSave = (newUserData) => {
//     setUserData(newUserData);
//     setIsEditing(false);
//   };
  return (
    <div>
      <table className='dogovor mt-[50px] sm:mt-[25px] text-[18px] w-[60%] sm:text-[14px] sm:w-[100%]'>
        <tbody >
          <tr className='bg-gray-light'>
            <td className='font-roman py-[12px] px-[20px]'>Название компании:</td>
            <td className='font-bold'>{userData.company}</td>
          </tr>
          <tr>
            <td className='font-roman py-[12px] px-[20px] flex'>Номер телефона:</td>
            <td>                                              
            <ul className='list-none py-[12px]'>
            {userData.tel.map((num, index)=> (
             <li key={index} className='font-bold'>{num}</li>
          ))}
            </ul>
            </td>
            </tr>
            <tr className='bg-gray-light'>
            <td className={`font-roman py-[12px] px-[20px]`}>Ваш адрес:</td>
            <td>
                <ul className='list-none py-[12px] pr-[10px]'>
                {userData.addresses.map((address, index) => (
                   <li key={index} className='font-bold'>{address}</li>
                ))}
                </ul>
            </td>
            </tr>
        </tbody>
      </table>
<div className='flex gap-[30px] mt-[50px] sm:mt-[25px] sm:flex-col sm:gap-[12px]'>
<EditButton img={doc} disabled={!(loader===false)} name='Скачать договор' func={downloadPDF} style='sm:w-[100%]'/>
<EditButton name='Редактировать' img={edit} style='sm:w-[100%]'/>
</div>
      {/* <button onClick={handleEditClick}>Edit Profile</button> */}
{/* 
      {isEditing && (
        <Modal
          userData={userData}
          onSave={handleSave}
        />
      )} */}
    </div>
  );
};

export default LegalProfile;