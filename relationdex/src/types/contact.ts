/**
 * Contact interface representing a person in the relationship tracker.
 * 
 * Tracks personal contacts with interaction history and desired contact frequencies.
 */
export interface Contact {
  /** Unique identifier for the contact */
  id: string;
  
  /** Full name of the contact (required) */
  name: string;
  
  /** Optional notes about the contact */
  notes: string;
  
  /** Date of last conversation/interaction (null if never talked) */
  lastTalkedDate: Date | null;
  
  /** Date of last in-person meeting (null if never seen in person) */
  lastSeenDate: Date | null;
  
  /** Desired frequency of contact via talking (in days) */
  desiredTalkFrequency: number;
  
  /** Desired frequency of in-person meetings (in days) */
  desiredSeeFrequency: number;
}

