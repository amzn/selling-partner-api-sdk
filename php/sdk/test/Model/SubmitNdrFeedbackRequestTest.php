<?php
/**
 * SubmitNdrFeedbackRequestTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace SpApi\Test\Model;

use PHPUnit\Framework\TestCase;
use SpApi\Model\shipping\v2\SubmitNdrFeedbackRequest;

/**
 * SubmitNdrFeedbackRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request schema for the NdrFeedback operation
 * @package     SpApi
 */
class SubmitNdrFeedbackRequestTest extends TestCase
{

    private SubmitNdrFeedbackRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SubmitNdrFeedbackRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SubmitNdrFeedbackRequest"
     */
    public function testSubmitNdrFeedbackRequest()
    {
        $this->assertInstanceOf(SubmitNdrFeedbackRequest::class, $this->model);
    }

    /**
     * Test attribute "tracking_id"
     */
    public function testPropertyTrackingId()
    {
        $testValue = 'test';
        
        $this->model->setTrackingId($testValue);
        $this->assertEquals($testValue, $this->model->getTrackingId());
    }

    /**
     * Test attribute "ndr_action"
     */
    public function testPropertyNdrAction()
    {
        $enumInstance = new \SpApi\Model\shipping\v2\NdrAction();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setNdrAction($testValue);
        $this->assertEquals($testValue, $this->model->getNdrAction());
    }

    /**
     * Test attribute "ndr_request_data"
     */
    public function testPropertyNdrRequestData()
    {
        
        $testValue = new \SpApi\Model\shipping\v2\NdrRequestData();
        
        $this->model->setNdrRequestData($testValue);
        $this->assertEquals($testValue, $this->model->getNdrRequestData());
    }
}
