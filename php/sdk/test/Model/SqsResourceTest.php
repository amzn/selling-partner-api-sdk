<?php
/**
 * SqsResourceTest
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
use OpenAPI\Client\Model\notifications\v1\SqsResource;

/**
 * SqsResourceTest Class Doc Comment
 *
 * @category    Class
 * @description The information required to create an Amazon Simple Queue Service (Amazon SQS) queue destination.
 * @package     OpenAPI\Client
 */
class SqsResourceTest extends TestCase
{

    private SqsResource $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SqsResource();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SqsResource"
     */
    public function testSqsResource()
    {
        $this->assertInstanceOf(SqsResource::class, $this->model);
    }

    /**
     * Test attribute "arn"
     */
    public function testPropertyArn()
    {
        $testValue = 'test';
        
        $this->model->setArn($testValue);
        $this->assertEquals($testValue, $this->model->getArn());
    }
}
