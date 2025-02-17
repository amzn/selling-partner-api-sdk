<?php
/**
 * CreateConfirmOrderDetailsRequestTest
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
use SpApi\Model\messaging\v1\CreateConfirmOrderDetailsRequest;

/**
 * CreateConfirmOrderDetailsRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request schema for the createConfirmOrderDetails operation.
 * @package     SpApi
 */
class CreateConfirmOrderDetailsRequestTest extends TestCase
{

    private CreateConfirmOrderDetailsRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateConfirmOrderDetailsRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateConfirmOrderDetailsRequest"
     */
    public function testCreateConfirmOrderDetailsRequest()
    {
        $this->assertInstanceOf(CreateConfirmOrderDetailsRequest::class, $this->model);
    }

    /**
     * Test attribute "text"
     */
    public function testPropertyText()
    {
        $testValue = 'test';
        
        $this->model->setText($testValue);
        $this->assertEquals($testValue, $this->model->getText());
    }
}
