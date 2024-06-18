
const { combineRgb } = require('@companion-module/base')

function getPresetsDefinitions(self) {

	let presets = []

	//----------------------------------------------------------------
    // PROGRAM SWITCHER BUTTONS GENERATION TODO:DYNAMIC NAMING AND 
    // BUTTON GENERATION
    //----------------------------------------------------------------

    presets['PLAY'] = {
        type: 'button',
        category: 'Commands',
        name: 'Play',
        style: {
            text: 'Play',
            size: '14',
            color: combineRgb(255,255,255),
            bgcolor: combineRgb(255,0,0)
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'PLAY',
                    },
                ],
            },
        ],
       
    }

    presets['STOP'] = {
        type: 'button',
        category: 'Commands',
        name: 'BLACK',
        style: {
            text: 'MANUAL',
            size: '14',
            color: combineRgb(255,255,255),
            bgcolor: combineRgb(255,0,0)
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'STOP',
                    },
                ],
            },
        ],
       
    }

    presets['PAUSE'] = {
        type: 'button',
        category: 'Commands',
        name: 'PAUSE',
        style: {
            text: 'PAUSE',
            size: '14',
            color: combineRgb(255,255,255),
            bgcolor: combineRgb(255,0,0)
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'PAUSE',
                    },
                ],
            },
        ],
       
    }

    presets['JUMPIFNOV'] = {
        type: 'button',
        category: 'Commands',
        name: 'JUMPIFNOV',
        style: {
            text: 'JUMPIFNOV',
            size: '14',
            color: combineRgb(255,255,255),
            bgcolor: combineRgb(255,0,0)
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'JUMPIFNOV',
                    },
                ],
            },
        ],
       
    }

    presets['JUMPIFLINE'] = {
        type: 'button',
        category: 'Commands',
        name: 'JUMPIFLINE',
        style: {
            text: 'JUMPIFLINE',
            size: '14',
            color: combineRgb(255,255,255),
            bgcolor: combineRgb(255,0,0)
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'JUMPIFLINE',
                    },
                ],
            },
        ],
       
    }

    presets['JUMPANDREPEAT'] = {
        type: 'button',
        category: 'Commands',
        name: 'JUMPANDREPEAT',
        style: {
            text: 'JUMPANDREPEAT',
            size: '14',
            color: combineRgb(255,255,255),
            bgcolor: combineRgb(255,0,0)
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'JUMPANDREPEAT',
                    },
                ],
            },
        ],
       
    }

    presets['JUMPTOLINE'] = {
        type: 'button',
        category: 'Commands',
        name: 'JUMPTOLINE',
        style: {
            text: 'JUMPTOLINE',
            size: '14',
            color: combineRgb(255,255,255),
            bgcolor: combineRgb(255,0,0)
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'JUMPTOLINE',
                    },
                ],
            },
        ],
       
    }

    presets['JUMP'] = {
        type: 'button',
        category: 'Commands',
        name: 'JUMP',
        style: {
            text: 'JUMP',
            size: '14',
            color: combineRgb(255,255,255),
            bgcolor: combineRgb(255,0,0)
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'JUMP',
                    },
                ],
            },
        ],
       
    }

    presets['BLACK'] = {
        type: 'button',
        category: 'Commands',
        name: 'STOP',
        style: {
            text: 'STOP',
            size: '14',
            color: combineRgb(255,255,255),
            bgcolor: combineRgb(255,0,0)
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'BLACK',
                    },
                ],
            },
        ],
       
    }

    //--------------------------------------------------------------------------
    
    presets['SWITCHER'] = {
        type: 'button',
        category: 'Toggle',
        name: 'SWITCHER',
        style: {
            text: 'SWITCHER',
            size: '14',
            color: combineRgb(255,255,255),
            bgcolor: combineRgb(255,0,0)
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'SWITCHER',
                    },
                ],
            },
        ],
        feedbacks: [
            {
                feedbackId: 'switcher_status',
                options: {
                    off_color:combineRgb(0, 0, 0),
                    on_color:combineRgb(255, 0, 0),
                }
            }
        ],
       
    }


    presets['AUTOFILL'] = {
        type: 'button',
        category: 'Toggle',
        name: 'AUTOFILL',
        style: {
            text: 'AUTOFILL',
            size: '14',
            color: combineRgb(255,255,255),
            bgcolor: combineRgb(255,0,0)
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'AUTOFILL',
                    },
                ],
            },
        ],
        feedbacks: [
            {
                feedbackId: 'autofill_status',
                options: {
                    off_color:combineRgb(0, 0, 0),
                    on_color:combineRgb(255, 0, 0),
                }
            }
        ],
       
    }

    presets['AUTOCG'] = {
        type: 'button',
        category: 'Toggle',
        name: 'AUTOCG',
        style: {
            text: 'AUTOCG',
            size: '14',
            color: combineRgb(255,255,255),
            bgcolor: combineRgb(255,0,0)
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'AUTOCG',
                    },
                ],
            },
        ],
        feedbacks: [
            {
                feedbackId: 'autocg_status',
                options: {
                    off_color:combineRgb(0, 0, 0),
                    on_color:combineRgb(255, 0, 0),
                }
            }
        ],
       
    }

    presets['LOOP'] = {
        type: 'button',
        category: 'Toggle',
        name: 'LOOP',
        style: {
            text: 'LOOP',
            size: '14',
            color: combineRgb(255,255,255),
            bgcolor: combineRgb(255,0,0)
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'LOOP',
                    },
                ],
            },  
        ],
        feedbacks: [
            {
                feedbackId: 'loop_status',
                options: {
                    off_color:combineRgb(0, 0, 0),
                    on_color:combineRgb(255, 0, 0),
                }
            }
        ],
       
    }

    presets['EXACTTIME'] = {
        type: 'button',
        category: 'Toggle',
        name: 'EXACTTIME',
        style: {
            text: 'EXACTTIME',
            size: '14',
            color: combineRgb(255,255,255),
            bgcolor: combineRgb(255,0,0)
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'EXACTTIME',
                    },
                ],
            },
        ],
        feedbacks: [
            {
                feedbackId: 'ExactTime_status',
                options: {
                    off_color:combineRgb(0, 0, 0),
                    on_color:combineRgb(255, 0, 0),
                }
            }
        ],
    }

    presets['ALWAYSPREPARE'] = {
        type: 'button',
        category: 'Toggle',
        name: 'ALWAYSPREPARE',
        style: {
            text: 'ALWAYSPREPARE',
            size: '14',
            color: combineRgb(255,255,255),
            bgcolor: combineRgb(255,0,0)
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'ALWAYSPREPARE',
                    },
                ],
            },
        ],
        feedbacks: [
            {
                feedbackId: 'AlwaysPrepare_status',
                options: {
                    off_color:combineRgb(0, 0, 0),
                    on_color:combineRgb(255, 0, 0),
                }
            }
        ],
     
    }

    //--------------------------------------------------------------------------

    presets['ADDITEM'] = {
        type: 'button',
        category: 'Commands',
        name: 'ADDITEM',
        style: {
            text: 'ADDITEM',
            size: '14',
            color: combineRgb(255,255,255),
            bgcolor: combineRgb(255,0,0)
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'ADDITEM',
                    },
                ],
            },
        ],
       
    }

    presets['PLAYLISTLOAD'] = {
        type: 'button',
        category: 'Commands',
        name: 'PLAYLISTLOAD',
        style: {
            text: 'PLAYLISTLOAD',
            size: '14',
            color: combineRgb(255,255,255),
            bgcolor: combineRgb(255,0,0)
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'PLAYLISTLOAD',
                    },
                ],
            },
        ],
       
    }

    presets['PLAYLISTSAVE'] = {
        type: 'button',
        category: 'Commands',
        name: 'PLAYLISTSAVE',
        style: {
            text: 'PLAYLISTSAVE',
            size: '14',
            color: combineRgb(255,255,255),
            bgcolor: combineRgb(255,0,0)
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'PLAYLISTSAVE',
                    },
                ],
            },
        ],
       
    }

    presets['PLAYITEM'] = {
        type: 'button',
        category: 'Commands',
        name: 'PLAYITEM',
        style: {
            text: 'PLAYITEM',
            size: '14',
            color: combineRgb(255,255,255),
            bgcolor: combineRgb(255,0,0)
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'PLAYITEM',
                    },
                ],
            },
        ],
       
    }

    presets['PLAYSPLIT'] = {
        type: 'button',
        category: 'Commands',
        name: 'PLAYSPLIT',
        style: {
            text: 'PLAYSPLIT',
            size: '14',
            color: combineRgb(255,255,255),
            bgcolor: combineRgb(255,0,0)
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'PLAYSPLIT',
                    },
                ],
            },
        ],
       
    }

    presets['MOVEUP'] = {
        type: 'button',
        category: 'Commands',
        name: 'MOVEUP',
        style: {
            text: 'MOVEUP',
            size: '14',
            color: combineRgb(255,255,255),
            bgcolor: combineRgb(255,0,0)
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'MOVEUP',
                    },
                ],
            },
        ],
       
    }

    presets['MOVEDOWN'] = {
        type: 'button',
        category: 'Commands',
        name: 'MOVEDOWN',
        style: {
            text: 'MOVEDOWN',
            size: '14',
            color: combineRgb(255,255,255),
            bgcolor: combineRgb(255,0,0)
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'MOVEDOWN',
                    },
                ],
            },
        ],
       
    }

    presets['GETTHUMB'] = {
        type: 'button',
        category: 'Commands',
        name: 'GETTHUMB',
        style: {
            text: 'GETTHUMB',
            size: '14',
            color: combineRgb(255,255,255),
            bgcolor: combineRgb(255,0,0)
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'GETTHUMB',
                    },
                ],
            },
        ],
       
    }

    presets['AUTO'] = {
        type: 'button',
        category: 'Commands',
        name: 'AUTO',
        style: {
            text: 'AUTO',
            size: '14',
            color: combineRgb(255,255,255),
            bgcolor: combineRgb(255,0,0)
        },
        steps: [
            {
                down: [
                    {
                        actionId: 'AUTO',
                    },
                ],
            },
        ],
       
    }


	return presets;
}
module.exports ={getPresetsDefinitions}