// 'use client' 
// import React, { useEffect, useState } from 'react';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/editer';
// import { useForm } from 'react-hook-form';
// import { z } from 'zod';
// import { Button } from '../ui/button';
// import { useRouter } from 'next/navigation'; 
// import { toast, useToast } from '../ui/use-toast';

// type ProfileData = {
//   first_name?: string | null;
//   username?: string | null;
//   bio?: string | null;
//   favorite_games?: string | null;
//   favorite_device?: string | null;
//   looking_for?: string | null;
//   twitch?: string | null;
//   twitter?: string | null;
//   instagram?: string | null;
//   discord?: string | null;
//   facebook?: string | null;
//   image?: string | null;
//   player_id?: number;
// };

// const FormSchema = z.object({
//   bio: z.string().optional(),
//   looking_for: z.string().optional(),
//   favorite_games: z.string().optional(),
//   favorite_device: z.string().optional(),
//   instagram: z.string().optional(),
//   facebook: z.string().optional(),
//   twitter: z.string().optional(),
//   twitch: z.string().optional(),
//   discord: z.string().optional(),
//   image: z.string().optional(),
// });

// const EditForm = () => {
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [profileData, setProfileData] = useState<ProfileData>({});
//   const router = useRouter();
//   const { toast } = useToast();

//   const form = useForm<z.infer<typeof FormSchema>>({
//     resolver: zodResolver(FormSchema),
//   });

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const response = await fetch('/api/profile');
//         if (!response.ok) {
//           throw new Error('Failed to fetch profile data');
//         }
//         const data = await response.json();
//         if (data.player) {
//           setProfileData(data.player);
//           form.reset({
//             bio: data.player.bio || '',
//             looking_for: data.player.looking_for || '',
//             favorite_games: data.player.favorite_games || '',
//             favorite_device: data.player.favorite_device || '',
//             image: data.player.image || '',
//           });
//         }
//       } catch (error) {
//         console.error('Error fetching profile data:', error);
//         toast({
//           title: 'Uh oh!',
//           description: 'You have not linked this social media account yet.',
//           variant: 'destructive',
//           className: 'bg-indigo-400 text-white text-lg',
//         });
//       }
//     };

//     fetchProfile();
//   }, [form, toast]);

 

//   const onSubmit = async (values: ProfileData) => {
//     try {
//       const response = await fetch('/api/edit', {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(values),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to update profile');
//       }

//       setIsSubmitted(true);
//       toast({
//         title: 'Success',
//         description: 'Profile updated successfully!',
//         variant: 'default',
//       });
//     } catch (error) {
//       console.error('Error updating profile:', error);
//       toast({
//         title: 'Error',
//         description: 'Failed to update profile',
//         variant: 'destructive',
//       });
//     }
//   };

//   useEffect(() => {
//     if (isSubmitted) {
//       router.push('/profile');
//     }
//   }, [isSubmitted]);
//   return (
//     <div className='flex justify-center items-center bg-indigo-200 p-10 rounded-xl'>
//       <div className='max-w-3xl py-6 px-6 bg-white shadow-md rounded-md'>
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)}>
           
//             <FormField
//               control={form.control}
//               name="bio"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>About You:</FormLabel>
//                   <FormControl>
//                     <textarea 
//                       className='border border-indigo-200 rounded-md w-full p-2 resize-none' 
//                       placeholder="Tell us about yourself..." 
//                       {...field} 
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//                      <FormField
//               control={form.control}
//               name="favorite_games"
//               render={({ field }) => (
//                 <FormItem className='mt-2'>
//                   <FormLabel>Favorite Games:</FormLabel>
//                   <FormControl>
//                     <textarea 
//                       className='border border-indigo-200 rounded-md w-full p-2 resize-none' 
//                       placeholder="Tell us what your favorite games are..." 
//                       {...field} 
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

// <FormField
//               control={form.control}
//               name="favorite_device"
//               render={({ field }) => (
//                 <FormItem className='mt-2'>
//                   <FormLabel>Preferred Gaming Device:</FormLabel>
//                   <FormControl>
//                     <textarea 
//                       className='border border-indigo-200 rounded-md w-full p-2 resize-none' 
//                       placeholder="Tell us how you play..." 
//                       {...field} 
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="looking_for"
//               render={({ field }) => (
//                 <FormItem className='mt-2'>
//                   <FormLabel>Looking For:</FormLabel>
//                   <FormControl>
//                     <textarea 
//                       className='border border-indigo-200 rounded-md w-full p-2 resize-none' 
//                       placeholder="What are you hoping to find?" 
//                       {...field} 
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

// <FormField
//               control={form.control}
//               name="instagram"
//               render={({ field }) => (
//                 <FormItem className='mt-2'>
//                   <FormLabel>Instagram:</FormLabel>
//                   <FormControl>
//                   <input 
//                       type="text" 
//                       className='border border-indigo-200 rounded-md w-full p-2' 
//                       placeholder="Link your Instagram Account" 
//                       {...field} 
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

// <FormField
//               control={form.control}
//               name="discord"
//               render={({ field }) => (
//                 <FormItem className='mt-2'>
//                   <FormLabel>Discord:</FormLabel>
//                   <FormControl>
//                   <input 
//                       type="text" 
//                       className='border border-indigo-200 rounded-md w-full p-2' 
//                       placeholder="Link your Discord Account" 
//                       {...field} 
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

// <FormField
//               control={form.control}
//               name="twitch"
//               render={({ field }) => (
//                 <FormItem className='mt-2'>
//                   <FormLabel>Twitch:</FormLabel>
//                   <FormControl>
//                   <input 
//                       type="text" 
//                       className='border border-indigo-200 rounded-md w-full p-2' 
//                       placeholder="Link your Twitch Account" 
//                       {...field} 
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

// <FormField
//               control={form.control}
//               name="facebook"
//               render={({ field }) => (
//                 <FormItem className='mt-2'>
//                   <FormLabel>Facebook:</FormLabel>
//                   <FormControl>
//                   <input 
//                       type="text" 
//                       className='border border-indigo-200 rounded-md w-full p-2' 
//                       placeholder="Link your Facebook Account" 
//                       {...field} 
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//         <FormField
//               control={form.control}
//               name="twitter"
//               render={({ field }) => (
//                 <FormItem className='mt-2'>
//                   <FormLabel>X:</FormLabel>
//                   <FormControl>
//                   <input 
//                       type="text" 
//                       className='border border-indigo-200 rounded-md w-full p-2' 
//                       placeholder="Link your X account" 
//                       {...field} 
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="image"
//               render={({ field }) => (
//                 <FormItem className='mt-2'>
//                   <FormLabel>Profile Image:</FormLabel>
//                   <FormControl>
//                     <input 
//                       type="text" 
//                       className='border border-indigo-200 rounded-md w-full p-2' 
//                       placeholder="Image URL" 
//                       {...field} 
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <br></br>
//             <Button className='outline uppercase text-md text-white bg-indigo-600 w-full my-6' type="submit">Edit Profile</Button>
//           </form>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default EditForm;


'use client';

import React, { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/editer';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { toast, useToast } from '../ui/use-toast';

const FormSchema = z.object({
  bio: z.string().optional(),
  looking_for: z.string().optional(),
  favorite_games: z.string().optional(),
  favorite_device: z.string().optional(),
  instagram: z.string().optional(),
  facebook: z.string().optional(),
  twitter: z.string().optional(),
  twitch: z.string().optional(),
  discord: z.string().optional(),
  image: z.string().optional(),
});

type ProfileData = z.infer<typeof FormSchema>;

const EditForm = () => {
  const [profileData, setProfileData] = useState<ProfileData>({});
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('/api/profile');
        if (!response.ok) {
          throw new Error('Failed to fetch profile data');
        }
        const data = await response.json();
        if (data.player) {
          setProfileData(data.player);
          form.reset({
            bio: data.player.bio || '',
            looking_for: data.player.looking_for || '',
            favorite_games: data.player.favorite_games || '',
            favorite_device: data.player.favorite_device || '',
            instagram: data.player.instagram || '',
            facebook: data.player.facebook || '',
            twitter: data.player.twitter || '',
            twitch: data.player.twitch || '',
            discord: data.player.discord || '',
            image: data.player.image || '',
          });
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfile();
  }, [form]);

  const onSubmit = async (values: ProfileData) => {
    try {
      const response = await fetch('/api/edit', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      toast({
        title: 'Success',
        description: 'Profile updated successfully!',
        variant: 'default',
      });

      router.push('/profile');
    } catch (error) {
      console.error('Error updating profile:', error);
      toast({
        title: 'Error',
        description: 'Failed to update profile',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-500 text-gray-100 p-4 sm:p-8">
      <div className="max-w-5xl mx-auto bg-gray-900 p-8 rounded-lg shadow-xl">
        {/* Banner and Profile Image */}
        <div className="relative mb-12">
          <div className="w-full h-64 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg shadow-lg"></div>
          <img
            src={profileData.image || '/profile-image.jpg'}
            alt="Profile"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-40 h-40 rounded-full border-4 border-gray-900 object-cover shadow-lg"
          />

       {/* change profile image  */}
        </div>
        <div className="mt-16 flex justify-center">
            <Button
              onClick={() => router.push('/change-photo')}
              className="text-sm text-indigo-400 hover:underline hover:text-indigo-300"
            >
              Change Profile Photo
            </Button>
          </div>

        {/* Form Section */}
        <div className="bg-gray-900 rounded-lg shadow-lg">
          <h2 className="flex justify-center text-3xl font-semibold mb-6 text-purple-400">Edit Your Profile</h2>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg text-purple-400">About You:</FormLabel>
                    <FormControl>
                      <textarea
                        className="border border-gray-700 rounded-md w-full p-3 bg-gray-800 text-gray-300 overflow-hidden"
                        placeholder="Tell us about yourself..."
                        onInput={(e) => {
                          e.currentTarget.style.height = 'auto';
                          e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px';
                        }}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

<FormField
                control={form.control}
                name="favorite_games"
                render={({ field }) => (
                  <FormItem className="mt-6">
                    <FormLabel className="text-lg text-indigo-400">Favorite Games:</FormLabel>
                    <FormControl>
                      <textarea
                        className="border border-gray-700 rounded-md w-full p-3 bg-gray-800 text-gray-300 overflow-hidden"
                        placeholder="Tell us what your favorite games are..."
                        onInput={(e) => {
                          e.currentTarget.style.height = 'auto';
                          e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px';
                        }}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
             <FormField
                control={form.control}
                name="favorite_device"
                render={({ field }) => (
                  <FormItem className="mt-6">
                    <FormLabel className="text-lg text-green-400">Preferred Gaming Device:</FormLabel>
                    <FormControl>
                      <textarea
                        className="border border-gray-700 rounded-md w-full p-3 bg-gray-800 text-gray-300 overflow-hidden"
                        placeholder="Tell us how you play..."
                        onInput={(e) => {
                          e.currentTarget.style.height = 'auto';
                          e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px';
                        }}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />


              {['instagram', 'discord', 'twitch', 'facebook', 'twitter'].map((platform) => (
                <FormField
                  key={platform}
                  control={form.control}
                  name={platform}
                  render={({ field }) => (
                    <FormItem className="mt-6">
                      <FormLabel className={`text-lg ${
    platform === 'instagram'
      ? 'text-pink-400'
      : platform === 'discord'
      ? 'text-blue-400'
      : platform === 'twitch'
      ? 'text-purple-400'
      : platform === 'facebook'
      ? 'text-blue-600'
      : 'text-indigo-400'
  }`}>
                        {platform.charAt(0).toUpperCase() + platform.slice(1)}:
                      </FormLabel>
                      <FormControl>
                        <input
                          type="text"
                          className="border border-gray-700 rounded-md w-full p-3 bg-gray-800 text-gray-300"
                          placeholder={`Link your ${platform.charAt(0).toUpperCase() + platform.slice(1)} account`}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
            <div className="flex justify-center mt-4">
              <Button
              className="w-full bg-gradient-to-r from-[#ff3d63] to-[#f88b4b] text-white font-bold py-3 px-6 rounded-lg text-lg uppercase transition-transform hover:scale-105"
                type="submit"
              >
                Save Changes
              </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EditForm;
