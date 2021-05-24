import Layout from "../components/Layout"

const New = () => {
    return (
        <Layout>
            
            <div className="py-12 w-8/12 mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-6 bg-white border-b text-justify border-gray-200">
                        <form method="POST">
                            <div className="container flex-col mb-4">
                                <label className="text-xl text-justify">Title</label>
                                <input type="text" className="border-2 border-gray-300 p-2 w-full" name="title" id="title" </input>
                            </div>
                            <div className="mb-8">
                                <label className="text-xl text-justify">Content</label>
                                <textarea className="shadow form-textarea mt-1 block border-2 border-gray-300 p-2 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-48"  placeholder="Textarea"></textarea>
                            </div>

                            <div className="flex p-1">
                                <button role="submit" className="p-3 bg-blue-500 text-white hover:bg-blue-400">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
                
        </Layout>
    )
}

export default New