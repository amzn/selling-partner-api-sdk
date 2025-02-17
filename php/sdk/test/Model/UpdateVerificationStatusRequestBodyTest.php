<?php
/**
 * UpdateVerificationStatusRequestBodyTest
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
use SpApi\Model\orders\v0\UpdateVerificationStatusRequestBody;

/**
 * UpdateVerificationStatusRequestBodyTest Class Doc Comment
 *
 * @category    Class
 * @description The updated values of the &#x60;VerificationStatus&#x60; field.
 * @package     SpApi
 */
class UpdateVerificationStatusRequestBodyTest extends TestCase
{

    private UpdateVerificationStatusRequestBody $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new UpdateVerificationStatusRequestBody();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "UpdateVerificationStatusRequestBody"
     */
    public function testUpdateVerificationStatusRequestBody()
    {
        $this->assertInstanceOf(UpdateVerificationStatusRequestBody::class, $this->model);
    }

    /**
     * Test attribute "status"
     */
    public function testPropertyStatus()
    {
        $enumInstance = new \SpApi\Model\orders\v0\VerificationStatus();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setStatus($testValue);
        $this->assertEquals($testValue, $this->model->getStatus());
    }

    /**
     * Test attribute "external_reviewer_id"
     */
    public function testPropertyExternalReviewerId()
    {
        $testValue = 'test';
        
        $this->model->setExternalReviewerId($testValue);
        $this->assertEquals($testValue, $this->model->getExternalReviewerId());
    }

    /**
     * Test attribute "rejection_reason_id"
     */
    public function testPropertyRejectionReasonId()
    {
        $testValue = 'test';
        
        $this->model->setRejectionReasonId($testValue);
        $this->assertEquals($testValue, $this->model->getRejectionReasonId());
    }

    /**
     * Test attribute "verification_details"
     */
    public function testPropertyVerificationDetails()
    {
        
        $testValue = new \SpApi\Model\orders\v0\VerificationDetails();
        
        $this->model->setVerificationDetails($testValue);
        $this->assertEquals($testValue, $this->model->getVerificationDetails());
    }
}
