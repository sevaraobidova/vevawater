import React, { useState } from 'react';

const LegalProfile = () => {
  // Sample user data
  const [userData, setUserData] = useState({
    company: '"BAZIS DIGITAL" ООО',
    tel: ['+998 90 124-25-25', '+998 90 124-25-25'],
    addresses: ['г. Ташкент, улица Мукими, 166 ...', 'г. Ташкент, улица Арнасай, 2 ...'],
  });

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
      <table className=' mt-[50px] text-[18px] sm:text-[14px]'>
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
                <ul className='list-none py-[12px]'>
                {userData.addresses.map((address, index) => (
                   <li key={index} className='font-bold'>{address}</li>
                ))}
                </ul>
            </td>
            </tr>
               

        </tbody>
      </table>
{/* <EditButton name='Редактировать' img={edit}/> */}
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

  

