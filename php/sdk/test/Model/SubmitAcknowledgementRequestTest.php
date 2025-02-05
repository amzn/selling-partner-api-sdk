<?php
/**
 * SubmitAcknowledgementRequestTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\vendor\df\orders\SubmitAcknowledgementRequest;

/**
 * SubmitAcknowledgementRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request schema for the submitAcknowledgement operation.
 * @package     OpenAPI\Client
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
