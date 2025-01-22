<?php
/**
 * SubmitShippingLabelsRequestTest
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
use OpenAPI\Client\Model\vendor\df\shipping\SubmitShippingLabelsRequest;

/**
 * SubmitShippingLabelsRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request schema for the submitShippingLabelRequest operation.
 * @package     OpenAPI\Client
 */
class SubmitShippingLabelsRequestTest extends TestCase
{

    private SubmitShippingLabelsRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SubmitShippingLabelsRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SubmitShippingLabelsRequest"
     */
    public function testSubmitShippingLabelsRequest()
    {
        $this->assertInstanceOf(SubmitShippingLabelsRequest::class, $this->model);
    }

    /**
     * Test attribute "shipping_label_requests"
     */
    public function testPropertyShippingLabelRequests()
    {
        $testValue = [];
        
        $this->model->setShippingLabelRequests($testValue);
        $this->assertEquals($testValue, $this->model->getShippingLabelRequests());
    }
}
