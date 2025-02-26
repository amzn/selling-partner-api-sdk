<?php
/**
 * SubmitAcknowledgementRequestTest
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
use SpApi\Model\vendor\df\orders\v2021_12_28\SubmitAcknowledgementRequest;

/**
 * SubmitAcknowledgementRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request schema for the submitAcknowledgement operation.
 * @package     SpApi
 */
class SubmitAcknowledgementRequestTest extends TestCase
{

    private SubmitAcknowledgementRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SubmitAcknowledgementRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SubmitAcknowledgementRequest"
     */
    public function testSubmitAcknowledgementRequest()
    {
        $this->assertInstanceOf(SubmitAcknowledgementRequest::class, $this->model);
    }

    /**
     * Test attribute "order_acknowledgements"
     */
    public function testPropertyOrderAcknowledgements()
    {
        $testValue = [];
        
        $this->model->setOrderAcknowledgements($testValue);
        $this->assertEquals($testValue, $this->model->getOrderAcknowledgements());
    }
}
