<?php
/**
 * UpdateVerificationStatusRequestTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\orders\UpdateVerificationStatusRequest;

/**
 * UpdateVerificationStatusRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request body for the &#x60;updateVerificationStatus&#x60; operation.
 * @package     OpenAPI\Client
 */
class UpdateVerificationStatusRequestTest extends TestCase
{

    private UpdateVerificationStatusRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new UpdateVerificationStatusRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "UpdateVerificationStatusRequest"
     */
    public function testUpdateVerificationStatusRequest()
    {
        $this->assertInstanceOf(UpdateVerificationStatusRequest::class, $this->model);
    }

    /**
     * Test attribute "regulated_order_verification_status"
     */
    public function testPropertyRegulatedOrderVerificationStatus()
    {
        
        $testValue = new \OpenAPI\Client\Model\orders\UpdateVerificationStatusRequestBody();
        
        $this->model->setRegulatedOrderVerificationStatus($testValue);
        $this->assertEquals($testValue, $this->model->getRegulatedOrderVerificationStatus());
    }
}
