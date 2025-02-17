<?php
/**
 * RecordActionFeedbackRequestTest
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
use SpApi\Model\appIntegrations\v2024_04_01\RecordActionFeedbackRequest;

/**
 * RecordActionFeedbackRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request for the &#x60;recordActionFeedback&#x60; operation.
 * @package     SpApi
 */
class RecordActionFeedbackRequestTest extends TestCase
{

    private RecordActionFeedbackRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new RecordActionFeedbackRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "RecordActionFeedbackRequest"
     */
    public function testRecordActionFeedbackRequest()
    {
        $this->assertInstanceOf(RecordActionFeedbackRequest::class, $this->model);
    }

    /**
     * Test attribute "feedback_action_code"
     */
    public function testPropertyFeedbackActionCode()
    {
        $enumInstance = new RecordActionFeedbackRequest();
        $allowedValues = $enumInstance->getFeedbackActionCodeAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setFeedbackActionCode($testValue);
        $this->assertEquals($testValue, $this->model->getFeedbackActionCode());
    }
}
