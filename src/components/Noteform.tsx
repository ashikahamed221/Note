import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import {db} from '@/lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import toast from 'react-hot-toast'
// import { create } from 'domain'

const Noteform = () => {

    const[note,setnote] = useState("");
    const[Loading,setLoading] = useState(false)

    const handlesubmit = async () => {
      if(!note.trim()) 
        {
          toast.error("Enter Your Notes")
        }
        else{
          setLoading(true)
          await addDoc(collection(db,"notes"),{
           content:note,
           createAT:serverTimestamp()
        })
        
  
    setnote("")
    setLoading(false)
    toast.success("Note added Successfully")
  }
}
  return (
    <div className='space-y-2'>
      <Input 
      placeholder='Type your Note....'
      value={note} maxLength={50} 
      onChange={(e) => setnote(e.target.value)}
      />

      <div className='flex justify-between text-xs text-gray-500'>
        <span>{note.length}/50</span>
      </div>

      <Button className='w-full' onClick={handlesubmit} disabled={false}>
        {Loading ? 'Loading...':'Save Note'}
      </Button>
    </div>
  )
}

export default Noteform
