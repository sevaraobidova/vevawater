import React, { useState } from 'react';
import EditButton from './EditButton';
import edit from '/src/assets/images/edit.svg'
// import Modal from './Modal'; // You need to create the Modal component

const Profile = () => {
  // Sample user data
  const [userData, setUserData] = useState({
    fullName: 'Никифоров Михаил',
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
      <table className=' mt-[50px]'>
        <tbody >
          <tr className='bg-gray-light '>
            <td className='font-roman text-[18px] py-[12px] px-[20px]'>Фамилия и имя:</td>
            <td className='font-bold text-[18px]'>{userData.fullName}</td>
          </tr>
          <tr>
            <td className='font-roman text-[18px] py-[12px] px-[20px] flex'>Номер телефона:</td>
            <td>
            <ul className='list-none py-[12px]'>
            {userData.tel.map((num, index)=> (
             <li key={index} className='font-bold text-[18px]'>{num}</li>
          ))}
            </ul>
            </td>
            </tr>
               {userData.addresses.map((address, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-light' : ''}>
                    <td className={`font-roman text-[18px] py-[12px] px-[20px]`}>Ваш адрес №{index + 1}:</td>
                   <td className='font-bold text-[18px]'>{address}</td>
                  </tr>
                ))}

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

export default Profile;

  

