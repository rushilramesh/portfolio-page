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
                                <input type="text" className="border-2 border-gray-300 p-2 w-full" name="title" id="title" value="" required></input>
                            </div>
                            <div className="mb-8">
                                <label className="text-xl text-justify">Content</label>
                                <textarea class="shadow form-textarea mt-1 block w-full border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  placeholder="Textarea"></textarea>
                            </div>

                            <div className="flex p-1">
                                <select className="border-2 border-gray-300 border-r p-2" name="action">
                                    <option>Save and Publish</option>
                                    <option>Save Draft</option>
                                </select>
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