'use server'
import { CreateEventParams } from "@/types"
import { handleError } from "../utils"
import { connectToDatabase } from "../database"
import User from "../database/models/user.model"
import Event from '@/lib/database/models/event.model'
// CREATE
export async function createEvent({ userId, event, path }: CreateEventParams) {
    try {
      await connectToDatabase()
  
      const organizer = await User.findById(userId)
      if (!organizer) throw new Error('Organizer not found')
  
      const newEvent = await Event.create({ ...event, category: event.categoryId, organizer: userId })
     
  
      return JSON.parse(JSON.stringify(newEvent))
    } catch (error) {
        console.log(error);
      handleError(error)
    }
  }