const defaultState = {
    "sampleList":[
        {
            "category":"Refresh",
            "desc":"means a complete update of the previous scene. No connection exists between the last frame of the previous scene and the first frame of the coming scene. Usually, this mechanism can be used to present a new topic or an abrupt turn.",
            "samples":[
                {
                    "type":"Hard Cut",
                    "definition":"An abrupt change between two scenes.",
                    "imageUrl":"assets/image/hardCut.gif",
                    "links":[
                        {
                            "name":"link-name1",
                            "url":"http://www.google.com/"
                        },
                        {
                            "name":"link-name2",
                            "url":"http://www.google.com/"
                        },
                    ]
                },
                {
                    "type":"Wipe",
                    "definition":"Wipe uses moving or scaling masks and gradually present the coming scenes on the top of the previous scenes.",
                    "imageUrl":"assets/image/wipe.gif",
                    "links":[
                        {
                            "name":"link-name1",
                            "url":"http://www.google.com/"
                        },
                        {
                            "name":"link-name2",
                            "url":"http://www.google.com/"
                        },
                    ]
                },
                {
                    "type":"Fade",
                    "definition":"Fade uses the gradual change in the transparency of two scenes to illustrate a mild transformation between them.",
                    "imageUrl":"assets/image/fade.gif",
                    "links":[
                        {
                            "name":"link-name1",
                            "url":"http://www.google.com/"
                        },
                        {
                            "name":"link-name2",
                            "url":"http://www.google.com/"
                        },
                    ]
                }
            ]
        },
        {
            "category":"Halftime",
            "desc":"adds a new scene between video context. Such a scene is comparable to a quick half time between the previous scene and the coming scene. The scene consists of geometric- or iconic- shaped animations.",
            "samples":[
                {
                    "type":"Halftime",
                    "definition":"Halftime adds new scenes between clips. These new scenes consist of animations of geometric or iconic shapes. They are like a quick half time between the past scene and the next scene.",
                    "imageUrl":"assets/image/halftime.gif",
                    "links":[
                        {
                            "name":"link-name1",
                            "url":"http://www.google.com/"
                        },
                        {
                            "name":"link-name2",
                            "url":"http://www.google.com/"
                        },
                    ]
                },
            ]
        },
        {
            "category":"Camera Motion",
            "desc":"updates the scene due to the changing viewpoints or screen focus",
            "samples":[
                {
                    "type":"Pedestal",
                    "definition":"Pedestal means moving the camera vertically.",
                    "imageUrl":"assets/image/pedestal.gif",
                    "links":[
                        {
                            "name":"link-name1",
                            "url":"http://www.google.com/"
                        },
                        {
                            "name":"link-name2",
                            "url":"http://www.google.com/"
                        },
                    ]
                },
                {
                    "type":"Truck",
                    "definition":"Truck means moving the camera horizontally.",
                    "imageUrl":"assets/image/truck.gif",
                    "links":[
                        {
                            "name":"link-name1",
                            "url":"http://www.google.com/"
                        },
                        {
                            "name":"link-name2",
                            "url":"http://www.google.com/"
                        },
                    ]
                },
                {
                    "type":"Dolly",
                    "definition":"Dolly means moving the camera forward or backward.",
                    "imageUrl":"assets/image/dolly.gif",
                    "links":[
                        {
                            "name":"link-name1",
                            "url":"http://www.google.com/"
                        },
                        {
                            "name":"link-name2",
                            "url":"http://www.google.com/"
                        },
                    ]
                },
                {
                    "type":"Tilt",
                    "definition":"Tilt means moving the camera in vertical, but the camera keeps a stable focus during the movement.",
                    "imageUrl":"assets/image/tilt.gif",
                    "links":[
                        {
                            "name":"link-name1",
                            "url":"http://www.google.com/"
                        },
                        {
                            "name":"link-name2",
                            "url":"http://www.google.com/"
                        },
                    ]
                },
                {
                    "type":"Pan",
                    "definition":"Pan means moving the camera in horizontal, but the camera keeps a stable focus during the movement.",
                    "imageUrl":"assets/image/pan.gif",
                    "links":[
                        {
                            "name":"link-name1",
                            "url":"http://www.google.com/"
                        },
                        {
                            "name":"link-name2",
                            "url":"http://www.google.com/"
                        },
                    ]
                },
                {
                    "type":"Zoom",
                    "definition":"Zoom means changing the focal distance.",
                    "imageUrl":"assets/image/zooming.gif",
                    "links":[
                        {
                            "name":"link-name1",
                            "url":"http://www.google.com/"
                        },
                        {
                            "name":"link-name2",
                            "url":"http://www.google.com/"
                        },
                    ]
                },
                {
                    "type":"Rack Focus",
                    "definition":"Rack Focus means changing the focus in the scene, for example, bokeh effects.",
                    "imageUrl":"assets/image/rackFocus.gif",
                    "links":[
                        {
                            "name":"link-name1",
                            "url":"http://www.google.com/"
                        },
                        {
                            "name":"link-name2",
                            "url":"http://www.google.com/"
                        },
                    ]
                },
            ]
        },
        {
            "category":"Preserving Guide",
            "desc":"reuses elements in the previous scene as a visual guide that directs to the following content. A preserving guide can be a guide that leads the viewers’ attention from the previous scene to the coming one. This guide can be used together with camera motions that consist of a fluid transformation.",
            "samples":[
                {
                    "type":"Rotating/Scaling/Translating Guide",
                    "definition":"A single or a group of visual items in the previous scene are kept and reused in the coming scenes. However, the layout of these visual items, for instance, orientation, size, and position, may change. These visual elements maintain the narrative information in previous scenes by preserving the same appearance, and at the same time, guide viewers’ attention to a new scene by changing the layout.",
                    "imageUrl":"assets/image/rstGuide.gif",
                    "links":[
                        {
                            "name":"link-name1",
                            "url":"http://www.google.com/"
                        },
                        {
                            "name":"link-name2",
                            "url":"http://www.google.com/"
                        },
                    ]
                },
                {
                    "type":"Expanding/Shrinking Guide",
                    "definition":"This type of transition means two related situations. The first situation is to expand the color of a specific item in the previous scene to the background color of the coming scene. Often, the coming scene introduces details about the item. The other situation is to shrink the background color of the previous scene to a specific item of the coming scene.",
                    "imageUrl":"assets/image/expandingGuide.gif",
                    "links":[
                        {
                            "name":"link-name1",
                            "url":"http://www.google.com/"
                        },
                        {
                            "name":"link-name2",
                            "url":"http://www.google.com/"
                        },
                    ]
                },
                {
                    "type":"Staying Guide",
                    "definition":"This type of transition means that the layout of the visual items in the previous scene remains the same, and additional items are interacting with the existed items. The stable visual items are unchanged cue in the scene, and they can be regarded as the basis for the additional items entering, growing, and leaving.",
                    "imageUrl":"assets/image/stayingGuide.gif",
                    "links":[
                        {
                            "name":"link-name1",
                            "url":"http://www.google.com/"
                        },
                        {
                            "name":"link-name2",
                            "url":"http://www.google.com/"
                        },
                    ]
                },
            ]
        },
        {
            "category":"Narrative Agent",
            "desc":"means substitutes for data during data-driven storytelling. This type of transition is data-driven. The transitioned elements could be regarded as agents of data attributes or data values.",
            "samples":[
                {
                    "type":"Updating Content",
                    "definition":"This type of transition means updating the visual content without changing the shapes and positions of the contents in the scenes. In this transition, the shape, and position maintain the narrative information; however, the number of the contents changes to show the differences.",
                    "imageUrl":"assets/image/updatingContent.gif",
                    "links":[
                        {
                            "name":"link-name1",
                            "url":"http://www.google.com/"
                        },
                        {
                            "name":"link-name2",
                            "url":"http://www.google.com/"
                        },
                    ]
                },
                {
                    "type":"Scaling",
                    "definition":"This type of transition changes sizes to show the transformation of value change. Although the size changes, the other visual variables remain the same, thereby making the contents coherent in different scenes.",
                    "imageUrl":"assets/image/scaling.gif",
                    "links":[
                        {
                            "name":"link-name1",
                            "url":"http://www.google.com/"
                        },
                        {
                            "name":"link-name2",
                            "url":"http://www.google.com/"
                        },
                    ]
                },
                {
                    "type":"Morphing",
                    "definition":"This type of transition mainly morphs icons or shapes from old ones to new ones. This transition conveys insights into the transformation between data.",
                    "imageUrl":"assets/image/morphing.gif",
                    "links":[
                        {
                            "name":"link-name1",
                            "url":"http://www.google.com/"
                        },
                        {
                            "name":"link-name2",
                            "url":"http://www.google.com/"
                        },
                    ]
                },
                {
                    "type":"Merging / Splitting",
                    "definition":"Merging means combining separate contents into a group, while splitting means separating a group of contents divides. This type of transition describes insights into the gathering or scattering. The whole-part relationship of data can be clearly illustrated by using this type of transition.",
                    "imageUrl":"assets/image/merging.gif",
                    "links":[
                        {
                            "name":"link-name1",
                            "url":"http://www.google.com/"
                        },
                        {
                            "name":"link-name2",
                            "url":"http://www.google.com/"
                        },
                    ]
                },
            ]
        },
    ]
};

//defaultState
const reducer = (state = defaultState,action) => {

    const newState = JSON.parse(JSON.stringify(state));
    return newState;
};
export default reducer;
