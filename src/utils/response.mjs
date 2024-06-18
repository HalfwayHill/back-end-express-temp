const resBasePipe = (data, code, msg) => {
    // 进行统一处理
    const resResult = {
        code: code,   // 你可以设置任何你想要的信息
        data: data,
        msg: msg
    };
  
    return resResult;
};

function resSuccessPipe (data, code = 200, msg = "Success") {
    return this.send(resBasePipe(data, code, msg));
};

function resFailurePipe (code = 400, msg = "Failure", data = null) {
    return this.send(resBasePipe(data, code, msg));
};

export { resSuccessPipe, resFailurePipe }