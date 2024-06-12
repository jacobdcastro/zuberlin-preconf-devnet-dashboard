"use client"
import React, { useState } from 'react'
import { cn } from '@/lib/utils';
import { IEpoch, ISlot } from '@/models/preconf';

const EpochRow = () => {

    // dummy data
    const dummyEpoch = {
        slots: [
            {
                proposerPubKey: '0x12345...6789a',
                validatorIndex: 1,
                slotNumber: 0,
                slotStatus: 'COMPLETE'
            },
            {
                proposerPubKey: '0x12345...6789b',
                validatorIndex: 2,
                slotNumber: 1,
                slotStatus: 'COMPLETE'
            },
            {
                proposerPubKey: '0x12345...6789c',
                validatorIndex: 3,
                slotNumber: 2,
                slotStatus: 'COMPLETE'
            },
            {
                proposerPubKey: '0x12345...6789d',
                validatorIndex: 4,
                slotNumber: 3,
                slotStatus: 'COMPLETE'
            },
            {
                proposerPubKey: '0x12345...6789e',
                validatorIndex: 5,
                slotNumber: 4,
                slotStatus: 'COMPLETE'
            },
            {
                proposerPubKey: '0x12345...6789f',
                validatorIndex: 6,
                slotNumber: 5,
                slotStatus: 'RUNNING'
            },
            {
                proposerPubKey: '0x12345...6789g',
                validatorIndex: 7,
                slotNumber: 6,
                slotStatus: 'AHEAD'
            },
            {
                proposerPubKey: '0x12345...6789g',
                validatorIndex: 7,
                slotNumber: 6,
                slotStatus: 'AHEAD'
            },
            {
                proposerPubKey: '0x12345...6789g',
                validatorIndex: 7,
                slotNumber: 6,
                slotStatus: 'AHEAD'
            },
            {
                proposerPubKey: '0x12345...6789g',
                validatorIndex: 7,
                slotNumber: 6,
                slotStatus: 'AHEAD'
            },
        ]
    }
    return (
        <div className="space-y-16 py-16 xl:space-y-20">
          <div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
              <h2 className="max-w-2xl text-base font-semibold leading-6 text-gray-900 lg:mx-0 lg:max-w-none">
                Epochs
              </h2>
            </div>
            <div className="mt-6 overflow-hidden border-t border-gray-300">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                  <table className="w-full text-left">
                    <tbody>
                        <tr className='flex my-2 '>
                            {dummyEpoch.slots.map((slot, index) => (
                                <td key={index} className={cn("flex mx-1", {"animate-pulse": slot?.slotStatus === "RUNNING"})}>
                                    <div className={cn("h-8 w-8 rounded bg-green-400", {"bg-gray-200": slot?.slotStatus === "RUNNING"}, {"bg-slate-400": slot?.slotStatus === "AHEAD"})}></div>
                                </td>
                            ))}
                        </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default EpochRow