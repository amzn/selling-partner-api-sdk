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
use OpenAPI\Client\Model\vendor\orders\v1\SubmitAcknowledgementRequest;

/**
 * SubmitAcknowledgementRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request schema for the submitAcknowledgment operation.
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
     * Test attribute "acknowledgements"
     */
    public function testPropertyAcknowledgements()
    {
        $testValue = [];
        
        $this->model->setAcknowledgements($testValue);
        $this->assertEquals($testValue, $this->model->getAcknowledgements());
    }
}
