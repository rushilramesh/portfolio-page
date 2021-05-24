import Layout from "../components/Layout"

const New = () => {
    return (
        <Layout>
            <div className="p-6 bg-white border-b border-gray-200">
                    <form method="POST" action="action.php">
                        <div className="mb-4">
                            <label className="text-xl text-gray-600">Title <span className="text-red-500">*</span></label>
                            <input type="text" className="border-2 border-gray-300 p-2 w-full" name="title" id="title" value="" required></input>
                        </div>

                        <div className="mb-4">
                            <label className="text-xl text-gray-600">Description</label>
                            <br/>
                            <input type="text" className="border-2 border-gray-300 p-2 w-full" name="description" id="description" placeholder="(Optional)"></input>
                        </div>

                        <div className="mb-8">
                            <label className="text-xl text-gray-600">Content <span className="text-red-500">*</span></label>
                            <textarea name="content" className="border-2 border-gray-500">
                                
                            </textarea>
                        </div>

                        <div className="flex p-1">
                            <select className="border-2 border-gray-300 border-r p-2" name="action">
                                <option>Save and Publish</option>
                                <option>Save Draft</option>
                            </select>
                            <button role="submit" className="p-3 bg-blue-500 text-white hover:bg-blue-400" required>Submit</button>
                        </div>
                    </form>
                </div>
        </Layout>
    )
}

export default New