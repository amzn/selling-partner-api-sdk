<?php
/**
 * CreateUnexpectedProblemRequestTest
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
use OpenAPI\Client\Model\messaging\CreateUnexpectedProblemRequest;

/**
 * CreateUnexpectedProblemRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request schema for the createUnexpectedProblem operation.
 * @package     OpenAPI\Client
 */
class CreateUnexpectedProblemRequestTest extends TestCase
{

    private CreateUnexpectedProblemRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateUnexpectedProblemRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateUnexpectedProblemRequest"
     */
    public function testCreateUnexpectedProblemRequest()
    {
        $this->assertInstanceOf(CreateUnexpectedProblemRequest::class, $this->model);
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
