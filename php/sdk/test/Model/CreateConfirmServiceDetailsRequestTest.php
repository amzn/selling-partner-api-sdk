<?php
/**
 * CreateConfirmServiceDetailsRequestTest
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
use SpApi\Model\messaging\v1\CreateConfirmServiceDetailsRequest;

/**
 * CreateConfirmServiceDetailsRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request schema for the createConfirmServiceDetails operation.
 * @package     SpApi
 */
class CreateConfirmServiceDetailsRequestTest extends TestCase
{

    private CreateConfirmServiceDetailsRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateConfirmServiceDetailsRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateConfirmServiceDetailsRequest"
     */
    public function testCreateConfirmServiceDetailsRequest()
    {
        $this->assertInstanceOf(CreateConfirmServiceDetailsRequest::class, $this->model);
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
